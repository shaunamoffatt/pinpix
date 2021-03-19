class Post
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps
  validates :title, presence: true

  field :title, type: String
  field :image_id, type: String
  field :tags, type: Array
  #field :is_active, type: Mongoid::Boolean, default: true
  field :body, type: String

  has_one :user
  has_one :image
end
