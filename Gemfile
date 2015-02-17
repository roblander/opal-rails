source 'https://rubygems.org'
gemspec

gem 'capybara-webkit' unless ENV['CI']
gem 'opal',        github: 'roblander/opal', branch: 'edge'
gem 'opal-jquery', :github => 'opal/opal-jquery'

if RUBY_VERSION.to_f == 1.8
  gem 'nokogiri', '< 1.6'
end
