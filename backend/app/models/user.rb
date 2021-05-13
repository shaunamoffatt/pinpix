class User
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword
  field :name, type: String
  field :email, type: String
  field :password_digest, type: String

  embeds_one :profile_picture, :cascade_callbacks => true
  has_many :pins
  has_many :post
  # encrypt password
  has_secure_password
  #https://47medium.com/aviabird/mongoid-how-to-serialize-to-json-with-a-string-id-attribute-2d5c1bc284a7
  # Validations
  validates :email, presence: true
  validates_presence_of :password_digest, message: " Problem"
  validates_uniqueness_of :email, message: " already exists"
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/
end
