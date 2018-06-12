# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create!({username: "anseladams", password: "qwer0987", email: "photo@gmail.com", first_name: "Ansel", last_name: "Adams", img_url: "https://ncartmuseum.org/images/uploads/blog/_medium/Resized_Alinder__Ansel_Adams.jpg"})
10.times do
  User.create(
    username: Faker::Internet.user_name,
    password: "password",
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    img_url: "http://superawesomevectors.com/wp-content/uploads/2015/10/flat-camera-icon-thumb.jpg"
  )
end


Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1528371403556-8b4208834762?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=e60a391c735575e56ead5b88225dbcc7"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1528203455795-d2211546bd8f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=e12557279ebfb02cf8784d45e6ebd6e3"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1528696236008-096b7b8bece4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=006997959beb49787c3483d28234b849"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1528713756271-4dd6df9df56f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=32b1fd1196c10a5c15f85aa70c4dde68"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=bb6580c6b04dca1731b92e6c0e364e8c"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527908981081-e89567775aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=916549dd2df6cc2d20c414f9e2630df1"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527905804285-2f67b86e3bf6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=6adfa8d30f28aac7688bc16daf61efb3"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527589177743-325f24eef297?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=ad66a60d29c8a0c26b74fbf39fcafa59"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1526449265839-9b7ea465aff9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=2a88bd6843c5cdec05a8e86ae997dbd1"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1526139303310-19bc0e1f9a53?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=3cf64c2ff5116ee6c83cd86d9ed59c11"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1528152471340-93c305e72429?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=4271909432f99023a5202e1b4ce9425a"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=e06e704b253f820d50a0f2bfbe7d154d"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527015360242-0a42a531eeac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=3f2cb6d0f2b3ba4a8d4da8d7b671c8b0"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=61f4550dab765a15b81ac02392aaf0ba"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=997a13da0d2eaaf19ee851bde6913c73"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1526454218421-37b098e9380d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=22de717620ebfb7ebbee6aff174b3c51"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1526604648377-1433c7c1f5b7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=6c273bfa24e1478296d537960fa5e339"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527078034588-ff0ffd94d5c0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=25a2b186fc9244996807074c5d8386df"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1526402473595-3143d88eec7c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=76e42483afdabcafcb1508198d8003ad"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527187615996-967750ef5482?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=19c55046d555353d5799e0235bda420b"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527325678964-54921661f888?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=003a3c5a183fe591ef981b86f6d06e6e"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1528493761461-933880004f32?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=1e9392e7621b075aa4aa08eee265e39c"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527779924457-aec8bd402625?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=a209fbddc3ecaf351a1f6a4d0b81df37"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1528373553865-c5d96fe764f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=0b4d47bde109151311f015856244eb54"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527248647512-3a668e6dc10b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=c79b95ebdb0b66762460a3710c6901ae"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1526401342675-cf472cb67d1b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=f8ffe702b8d6188f3d14b761ed744391"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527572232473-494f1e9c7917?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=cb466c334119fe39d55956e85ee9c1fc"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1527074456279-f5f6bd374b28?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=1d7b6dda651704ae7fedcdf6f233bb30"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1526321839579-b73b23915824?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=4472a60bb2478d5d1c08b7a99b828cc1"
)

Photo.create(
    title: Faker::Commerce.product_name,
    description: Faker::Company.catch_phrase,
    user_id: rand(1..11),
    img_url: "https://images.unsplash.com/photo-1526995410062-b9e684e28d8f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=28cfd9cd65e795ec68738a7b9294c0fd"
)

70.times do
  Comment.create(
    body: Faker::Company.bs,
    user_id: rand(1..11),
    photo_id: rand(1..30)
  )
end

70.times do
  Tag.create(
    label: Faker::Hacker.adjective,
    photo_id: rand(1..30)
  )
end