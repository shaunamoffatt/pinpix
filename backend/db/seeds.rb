#https://github.com/faker-ruby/faker
200.times do
    user = User.new(name: Faker::Name.name,
    email: Faker::Internet.email)

    user.save
  end