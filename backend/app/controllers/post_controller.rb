class PostController < ApplicationController
  skip_before_action :authenticate_request
  before_action :active, only: [:show, :new, :edit]
  before_action :find, only: [:edit, :destroy, :update, :status]

  def show
    @posts = Post.all
    if @posts
      # returns the most recent posts
      render json: @posts.order(created_at: :desc).limit(15)
    end
  end

  # POST create new Post
  def create
    @post = Post.new(post_params)
    if @post.save
      # write out the address in the console
      puts @post.image
      render json: { image_url: @post.image }, status: 200
    else
      logger.info @post.errors.full_messages
      render json: { error: @post.errors.full_messages }, status: :not_acceptable
    end
  end

  def new
  end

  def edit
  end

  def destroy
    @post.content.destroy

    if @post.image
      @post.image.destroy
    end

    @post.destroy
    #redirect_to :back
  end

  def update
    data = params.permit(:title, :body)
    if data["tags"] != ""
      data["tags"] = params[:tags].split(",")
    end

    unless params[:image].blank?
      image = Image.create(params.permit(:image))
      data["image_id"] = image.id
    end

    if params[:image] == "on"
      @post.unset("image_id")
    end

    @post.update(data)
  end

  def status
    @post.is_active = @post.is_active ? false : true
    @post.save
  end

  private

  def active
    @active_post = "active"
  end

  def find
    @post = Post.find(params[:id]) or return not_found
  end

  def post_params
    params.permit(:image, :title, :body, :user_id)
  end
end
