require 'rubygems'
require 'rake'
require 'rake/clean'

APP_VERSION  = '1.0.0'
APP_NAME     = 'ninja-search-js'
APP_FILE_NAME= "ninja-search.user.js"

APP_ROOT     = File.expand_path(File.dirname(__FILE__))
APP_SRC_DIR  = File.join(APP_ROOT, 'public')
APP_DIST_DIR = File.join(APP_ROOT, 'website', 'dist')


task :default => [:dist, :package, :clean_package_source]

desc "Builds the distribution"
task :dist do
  mkdir_p(APP_DIST_DIR)
  sh "cp -R #{APP_SRC_DIR}/* #{APP_DIST_DIR}/"
end
