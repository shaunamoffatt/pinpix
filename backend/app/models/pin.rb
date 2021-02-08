class Pin
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps

  #field :current_title, type: Pintitle
  has_many :pintitles
  has_many :pinpost
  embeds_one :location
end
