# Given an array of cards, convert them into string

class PokerHand

  # Return an aarray of 5 cards in a player's hand
  def cards
    %w(6♠ 3♦ A♣ J♦ J♥)
  end

  def to_string
    " - #{cards.join ' - '} -"
  end

end

ph = PokerHand.new
puts ph.to_string