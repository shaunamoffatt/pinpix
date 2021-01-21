#https://github.com/faker-ruby/faker
200.times do
 
    user = User.new(
      name: Faker::Name.name,
      email: Faker::Internet.email,
      password: Faker::Internet.password(min_length: 10, max_length: 20),
  )
    user.save
  end