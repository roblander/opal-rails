source :rubygems
gemspec

gem 'opal',        :git => "git@github.com:roblander/opal.git"
gem 'opal-jquery', :require => false
gem 'opal-spec',   :git => 'git://github.com/opal/opal-spec.git',   :require => false


# Test app stuff

gem 'rails'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

group :test do
  gem 'capybara'
  gem 'launchy'
end
