class User
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps
  field :name, type: String
  field :email, type: String
end
