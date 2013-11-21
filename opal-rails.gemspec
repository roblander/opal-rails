# coding: utf-8
$:.push File.expand_path('../lib', __FILE__)
require 'opal/rails/version'

Gem::Specification.new do |s|
  s.name        = 'opal-rails'
  s.version     = Opal::Rails::VERSION
  s.authors     = ['Elia Schito']
  s.email       = ['elia@schito.me']
  s.homepage    = 'http://elia.github.com/opal-rails'
  s.summary     = %q{Rails bindings for opal JS engine}
  s.description = %q{Rails bindings for opal JS engine}
  s.license     = 'MIT-LICENSE'

  s.rubyforge_project = 'opal-rails'

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ['lib']

  s.add_runtime_dependency 'opal',           '~> 0.5.0'
  s.add_runtime_dependency 'opal-sprockets', '~> 0.3.0'

  s.add_runtime_dependency 'rails', '>= 3.2.13', '< 5.0'
  s.add_runtime_dependency 'opal-jquery',        '>= 0.1.0'
  s.add_runtime_dependency 'opal-rspec'
  s.add_runtime_dependency 'opal-activesupport', '>= 0.0.5'
  s.add_runtime_dependency 'jquery-rails'

  s.add_development_dependency 'rspec',       '~> 2.13'
  s.add_development_dependency 'rspec-rails', '~> 2.13'

  s.add_development_dependency 'capybara',    '< 2'
  s.add_development_dependency 'launchy'
  s.add_development_dependency 'execjs'
end
