class Question < ApplicationRecord

  def as_json_for_rack
    {
      id: id,
      theme_name: theme_name,
      question_text: question_text,
      option: option,
      answer: answer
    }
  end

  def as_json_for_use
    {
      theme_name: theme_name,
      question_text: question_text,
      option: option,
      answer: answer
    }
  end
end
