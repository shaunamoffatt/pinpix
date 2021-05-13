class Pin
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps

  #field :current_title, type: Pintitle
  has_many :posts
  embeds_one :location
end
