json.extract! question, :id, :option, :answer, :theme_name, :question_text
json.url api_question_url(question, format: :json)
