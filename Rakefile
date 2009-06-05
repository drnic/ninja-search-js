require 'rubygems'
require 'rake'
require 'rake/clean'
require 'rake/packagetask'

$:.unshift File.dirname(__FILE__) + "/lib"

APP_VERSION  = '0.0.1'
APP_NAME     = 'ninja-search-js'
RUBYFORGE_PROJECT = APP_NAME
APP_TEMPLATE = "#{APP_NAME}.js.erb"
APP_FILE_NAME= "#{APP_NAME}.js"

APP_ROOT     = File.expand_path(File.dirname(__FILE__))
APP_SRC_DIR  = File.join(APP_ROOT, 'src')
APP_DIST_DIR = File.join(APP_ROOT, 'dist')
APP_PKG_DIR  = File.join(APP_ROOT, 'pkg')


unless ENV['rakefile_just_config']

task :default => [:dist, :package, :clean_package_source]

desc "Builds the distribution"
task :dist do
  $:.unshift File.join(APP_ROOT, 'lib')
  require 'protodoc'
  require 'fileutils'
  FileUtils.mkdir_p APP_DIST_DIR

  Dir.chdir(APP_SRC_DIR) do
    File.open(File.join(APP_DIST_DIR, APP_FILE_NAME), 'w+') do |dist|
      dist << Protodoc::Preprocessor.new(APP_TEMPLATE)
    end
  end
  Dir.chdir(APP_DIST_DIR) do
    FileUtils.copy_file APP_FILE_NAME, "#{APP_NAME}-#{APP_VERSION}.js"
  end
  if File.directory?("website")
    FileUtils.mkdir_p "website/dist"
    FileUtils.copy_file "dist/#{APP_FILE_NAME}",       "website/dist/#{APP_FILE_NAME}"
    FileUtils.copy_file "dist/#{APP_FILE_NAME}",       "website/dist/#{APP_NAME}-#{APP_VERSION}.js"
  end
end

Rake::PackageTask.new(APP_NAME, APP_VERSION) do |package|
  package.need_tar_gz = true
  package.package_dir = APP_PKG_DIR
  package.package_files.include(
    '[A-Z]*',
    'config/*.sample',
    "dist/#{APP_FILE_NAME}",
    'lib/**',
    'src/**',
    'script/**',
    'tasks/**',
    'test/**',
    'website/**'
  )
end

task :clean_package_source do
  rm_rf File.join(APP_PKG_DIR, "#{APP_NAME}-#{APP_VERSION}")
end

end