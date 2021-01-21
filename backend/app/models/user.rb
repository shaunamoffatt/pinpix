class User 
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword
  field :name, type: String
  field :email, type: String
  field :password_digest, type: String
  # encrypt password
  has_secure_password
  # Validations
  validates_presence_of :email, :password_digest
  validates_uniqueness_of :email
end
