def word_with_guesses(word)
    display = word
    display.each_char{|c| 
      if !guesses.include? c
        display.gsub(c, "-")
      end}
  end