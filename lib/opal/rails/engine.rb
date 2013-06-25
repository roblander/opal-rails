require 'rails'
require 'opal/sprockets/server'
require 'opal/sprockets/processor'

module Opal
  module Rails
    class Engine < ::Rails::Engine
      
      config.app_generators.javascript_engine :opal
      config.opal = ActiveSupport::OrderedOptions.new


      # Cache eager_load_paths now, otherwise the assets dir is added
      # and its .rb files are eagerly loaded.
      config.eager_load_paths

      config.before_initialize do |app|
        app.config.eager_load_paths = app.config.eager_load_paths.dup - Dir["#{app.root}/app/{assets,views}"]
      end

      initializer 'opal.asset_paths', :after => 'sprockets.environment', :group => :all do |app|
        Opal.paths.each do |path|
          app.assets.append_path path
        end
      end

      config.after_initialize do |app|
        config.opal.each_pair do |key, value|
          key = "#{key}="
          Opal::Processor.send(key, value) if Opal::Processor.respond_to? key
        end

        config = app.config
        maps_app = Opal::SourceMapServer.new(app.assets)

        app.routes.prepend do
          mount maps_app => maps_app.prefix
          get '/opal_spec' => 'opal_spec#run'
        end
      end

    end
  end
end
