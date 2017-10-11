

require 'sinatra'
#require 'sendgrid'

before do
	@class = ""
end

get '/contact' do 
	erb :contact
end
get '/locations' do
	erb :locations
end 
get '/menu' do
	@class = "menu"
	erb :menu
end
get '/orderonline' do
	erb :orderonline
end
get '/' do
	erb :ourstory
end
get '/press' do 
	erb :press
end

