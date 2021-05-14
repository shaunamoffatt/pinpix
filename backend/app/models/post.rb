class Post
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps
  #include Mongoid::Paperclip
  validates :title, presence: true
  validates :image, presence: true

  mount_uploader :image, ImageUploader
  field :title, type: String
  field :tags, type: Array
  #field :is_active, type: Mongoid::Boolean, default: true
  field :body, type: String
  has_one :user
  # has_one :image
end
