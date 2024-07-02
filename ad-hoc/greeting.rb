greet = ->(name) { "Hello, #{name}!" }
people = ["Ruby", "Wekoslav", "DWX", "Nürnberg"]

greeted = people.map(&greet)

greeted.each { |greeting| puts greeting }



