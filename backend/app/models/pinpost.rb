class Pinpost
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps

  has_one :pin, class_name: "Pin"
end
