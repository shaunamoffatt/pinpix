class Pintitle
  include Mongoid::Document

  field :title, type: String
  field :votes, type: Integer
  embedded_in :pin
end
