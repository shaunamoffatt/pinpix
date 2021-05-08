class Image
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Attributes::Dynamic

  belongs_to :post, optional: true
  #has_mongoid_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }
  has_mongoid_attached_file :image,
    :path => ":uploads",
    # :default_url => "/images/:attachment/missing_:style.png",
    :url => ":s3_alias_url", # These two are only required when you alias S3 - e.g. want to use cdn.example.com rather than s3.amazonaws.com
    :styles => {
      :original => ["1920x1680>", :jpg],
      :small => ["100x100#", :jpg],
      :medium => ["250x250", :jpg],
      :large => ["500x500>", :jpg],
    },
    :convert_options => { :all => "-background white -flatten +matte" }

  # do_not_validate_attachment_file_type :image
  #validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  #validates_attachment_content_type :attachment, :content_type => /image/
end
