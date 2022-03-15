json.extract! patient, :id, :name, :surname, :session_id, :notes, :created_at, :updated_at
json.url patient_url(patient, format: :json)
