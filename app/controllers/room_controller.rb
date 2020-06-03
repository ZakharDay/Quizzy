class RoomController < ApplicationController
  def index
    @questions = Question.all
    @questions_array = []

    @questions.each do |question|
      @questions_array.push(question.as_json_for_rack)
    end
  end
end
