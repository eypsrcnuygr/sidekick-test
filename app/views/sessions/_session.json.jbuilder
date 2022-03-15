json.extract! session, :id, :name, :wip, :stg, :ltg, :tries, :created_at, :updated_at
json.url session_url(session, format: :json)
