# Question one
# Create Calculator class. 
# Calculator#sum should have one instance of a method call sum
# It should take in two argument and return the sum of two number

class Calculator
  def sum num_1, num_2
    results = num_1 + num_2
    return results
  end
end

my_calc = Calculator.new
puts my_calc.sum 4, 10
