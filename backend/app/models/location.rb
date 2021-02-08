class Location
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Geocoder::Model::Mongoid

  field :coordinates, type: Array
  field :address
  geocoded_by :address               # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates
end
