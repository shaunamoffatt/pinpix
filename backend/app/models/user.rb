class User
  include Mongoid::Document
  include Mongoid::Timestamps
  field :userName, type: String
  field :email, type: String
end
