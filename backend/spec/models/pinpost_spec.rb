require "rails_helper"

# Test suite for User model
RSpec.describe Pinpos, type: :model do
  # Association test

  # Validation tests
  # ensure name, email and password_digest are present before save
  it { is_expected.to be_mongoid_document }
  it { is_expected.to be_dynamic_document }
  it { is_expected.to have_fields(:email, :name, :password_digest) }
  #it { should validate_presence_of(:password_digest) }
end
