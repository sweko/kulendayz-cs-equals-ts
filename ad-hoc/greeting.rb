greet = ->(name) { "Hello, #{name}!" }
people = ["Ruby", "Wekoslav", "Kulen Dayz", "Osijek"]

greeted = people.map(&greet)

greeted.each { |greeting| puts greeting }



