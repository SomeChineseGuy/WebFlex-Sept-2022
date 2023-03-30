# Given a class of Person, return super them into another class and return that string with Dr in front of them

class Person

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

end

class Doctor < Person
  def full_name
    "Dr. #{super}"
  end
end

doc = Doctor.new "Steve", "Also Steve"
puts doc.full_name