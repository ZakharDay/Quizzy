@questions = [
  {
    theme_name: 'Кино',
    question_text: 'Режиссёр фильма Таксист',
    option: ['Кристофер Нолан', 'Мартин Скорсезе', 'Вуди Аллен'],
    answer: 'Мартин Скорсезе'
  },
  {
    theme_name: 'Кино',
    question_text: 'Какая актриса снялась в главной роли фильма «Мама!»?',
    option: ['Кристен Стюарт', 'Эмма Уотсон', 'Дженнифер Лоуренс'],
    answer: 'Дженнифер Лоуренс'
  },
  {
    theme_name: 'Кино',
    question_text: 'Какой фильм из перечисленных не является фильмом Marvel?',
    option: ['Чёрная молния', 'Человек-паук', 'Железный человек'],
    answer: 'Чёрная молния'
  }
]

def seed_data
  drop_db
  create_question
end

def drop_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_question
  @questions.each do |question|
    Question.create!(question)
    puts "#{question}"
  end
end


seed_data
