# Create a class called Superhero which takes in a name for constructing instances: s = Superhero.new("Lady Fairplay")
# Once created, we should be able to access their given name again:
# s.name ==> "Laby Fairplay"


class Superhero
  def initialize name
    @name = name
  end

  # Getter Method
  def name
    @name
  end

  # Setter Method
  def new_name new_name
    @name = new_name
  end

end

sman = Superhero.new "Spiderman"
puts sman.name

sman.new_name "Spider-Man"
puts sman.name