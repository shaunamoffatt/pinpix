class Post
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps
  validates :title, :tags, :is_active, presence: true

  field :title, type: String
  field :image_id, type: String
  field :tags, type: Array
  field :is_active, type: Mongoid::Boolean, default: true

  has_one :user
  has_one :content
  belongs_to :image
end
