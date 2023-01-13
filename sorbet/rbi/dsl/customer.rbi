# typed: true

# DO NOT EDIT MANUALLY
# This is an autogenerated file for dynamic methods in `Customer`.
# Please instead update this file by running `bin/tapioca dsl Customer`.

class Customer
  include GeneratedAssociationMethods
  include GeneratedAttributeMethods
  extend CommonRelationMethods
  extend GeneratedRelationMethods

  private

  sig { returns(NilClass) }
  def to_ary; end

  module CommonRelationMethods
    sig { params(block: T.nilable(T.proc.params(record: ::Customer).returns(T.untyped))).returns(T::Boolean) }
    def any?(&block); end

    sig { params(column_name: T.any(String, Symbol)).returns(T.untyped) }
    def average(column_name); end

    sig { params(attributes: T.untyped, block: T.nilable(T.proc.params(object: ::Customer).void)).returns(::Customer) }
    def build(attributes = nil, &block); end

    sig { params(operation: Symbol, column_name: T.any(String, Symbol)).returns(T.untyped) }
    def calculate(operation, column_name); end

    sig { params(column_name: T.untyped).returns(T.untyped) }
    def count(column_name = nil); end

    sig { params(attributes: T.untyped, block: T.nilable(T.proc.params(object: ::Customer).void)).returns(::Customer) }
    def create(attributes = nil, &block); end

    sig { params(attributes: T.untyped, block: T.nilable(T.proc.params(object: ::Customer).void)).returns(::Customer) }
    def create!(attributes = nil, &block); end

    sig { params(attributes: T.untyped, block: T.nilable(T.proc.params(object: ::Customer).void)).returns(::Customer) }
    def create_or_find_by(attributes, &block); end

    sig { params(attributes: T.untyped, block: T.nilable(T.proc.params(object: ::Customer).void)).returns(::Customer) }
    def create_or_find_by!(attributes, &block); end

    sig { returns(T::Array[::Customer]) }
    def destroy_all; end

    sig { params(conditions: T.untyped).returns(T::Boolean) }
    def exists?(conditions = :none); end

    sig { returns(T.nilable(::Customer)) }
    def fifth; end

    sig { returns(::Customer) }
    def fifth!; end

    sig { params(args: T.untyped).returns(T.untyped) }
    def find(*args); end

    sig { params(args: T.untyped).returns(T.nilable(::Customer)) }
    def find_by(*args); end

    sig { params(args: T.untyped).returns(::Customer) }
    def find_by!(*args); end

    sig { params(attributes: T.untyped, block: T.nilable(T.proc.params(object: ::Customer).void)).returns(::Customer) }
    def find_or_create_by(attributes, &block); end

    sig { params(attributes: T.untyped, block: T.nilable(T.proc.params(object: ::Customer).void)).returns(::Customer) }
    def find_or_create_by!(attributes, &block); end

    sig { params(attributes: T.untyped, block: T.nilable(T.proc.params(object: ::Customer).void)).returns(::Customer) }
    def find_or_initialize_by(attributes, &block); end

    sig { params(arg: T.untyped, args: T.untyped).returns(::Customer) }
    def find_sole_by(arg, *args); end

    sig { params(limit: T.untyped).returns(T.untyped) }
    def first(limit = nil); end

    sig { returns(::Customer) }
    def first!; end

    sig { returns(T.nilable(::Customer)) }
    def forty_two; end

    sig { returns(::Customer) }
    def forty_two!; end

    sig { returns(T.nilable(::Customer)) }
    def fourth; end

    sig { returns(::Customer) }
    def fourth!; end

    sig { returns(Array) }
    def ids; end

    sig { params(record: T.untyped).returns(T::Boolean) }
    def include?(record); end

    sig { params(limit: T.untyped).returns(T.untyped) }
    def last(limit = nil); end

    sig { returns(::Customer) }
    def last!; end

    sig { params(block: T.nilable(T.proc.params(record: ::Customer).returns(T.untyped))).returns(T::Boolean) }
    def many?(&block); end

    sig { params(column_name: T.any(String, Symbol)).returns(T.untyped) }
    def maximum(column_name); end

    sig { params(record: T.untyped).returns(T::Boolean) }
    def member?(record); end

    sig { params(column_name: T.any(String, Symbol)).returns(T.untyped) }
    def minimum(column_name); end

    sig { params(attributes: T.untyped, block: T.nilable(T.proc.params(object: ::Customer).void)).returns(::Customer) }
    def new(attributes = nil, &block); end

    sig { params(block: T.nilable(T.proc.params(record: ::Customer).returns(T.untyped))).returns(T::Boolean) }
    def none?(&block); end

    sig { params(block: T.nilable(T.proc.params(record: ::Customer).returns(T.untyped))).returns(T::Boolean) }
    def one?(&block); end

    sig { params(column_names: T.untyped).returns(T.untyped) }
    def pick(*column_names); end

    sig { params(column_names: T.untyped).returns(T.untyped) }
    def pluck(*column_names); end

    sig { returns(T.nilable(::Customer)) }
    def second; end

    sig { returns(::Customer) }
    def second!; end

    sig { returns(T.nilable(::Customer)) }
    def second_to_last; end

    sig { returns(::Customer) }
    def second_to_last!; end

    sig { returns(::Customer) }
    def sole; end

    sig do
      params(
        column_name: T.nilable(T.any(String, Symbol)),
        block: T.nilable(T.proc.params(record: T.untyped).returns(T.untyped))
      ).returns(T.untyped)
    end
    def sum(column_name = nil, &block); end

    sig { params(limit: T.untyped).returns(T.untyped) }
    def take(limit = nil); end

    sig { returns(::Customer) }
    def take!; end

    sig { returns(T.nilable(::Customer)) }
    def third; end

    sig { returns(::Customer) }
    def third!; end

    sig { returns(T.nilable(::Customer)) }
    def third_to_last; end

    sig { returns(::Customer) }
    def third_to_last!; end
  end

  module GeneratedAssociationMethods
    sig { returns(T.nilable(::Account)) }
    def account; end

    sig { params(value: T.nilable(::Account)).void }
    def account=(value); end

    sig { params(args: T.untyped, blk: T.untyped).returns(::Account) }
    def build_account(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(::Account) }
    def create_account(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(::Account) }
    def create_account!(*args, &blk); end

    sig { returns(T::Array[T.untyped]) }
    def order_ids; end

    sig { params(ids: T::Array[T.untyped]).returns(T::Array[T.untyped]) }
    def order_ids=(ids); end

    # This method is created by ActiveRecord on the `Customer` class because it declared `has_many :orders`.
    # 🔗 [Rails guide for `has_many` association](https://guides.rubyonrails.org/association_basics.html#the-has-many-association)
    sig { returns(::Order::PrivateCollectionProxy) }
    def orders; end

    sig { params(value: T::Enumerable[::Order]).void }
    def orders=(value); end

    sig { returns(T::Array[T.untyped]) }
    def product_ids; end

    sig { params(ids: T::Array[T.untyped]).returns(T::Array[T.untyped]) }
    def product_ids=(ids); end

    # This method is created by ActiveRecord on the `Customer` class because it declared `has_many :products, through: :orders`.
    # 🔗 [Rails guide for `has_many_through` association](https://guides.rubyonrails.org/association_basics.html#the-has-many-through-association)
    sig { returns(::Product::PrivateCollectionProxy) }
    def products; end

    sig { params(value: T::Enumerable[::Product]).void }
    def products=(value); end

    sig { returns(T.nilable(::Account)) }
    def reload_account; end
  end

  module GeneratedAssociationRelationMethods
    sig { returns(PrivateAssociationRelation) }
    def all; end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def and(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def annotate(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def chronological(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def create_with(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def distinct(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def eager_load(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def except(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def excluding(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def extending(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def extract_associated(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def from(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def group(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def having(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def in_order_of(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def includes(*args, &blk); end

    sig do
      params(
        attributes: Hash,
        returning: T.nilable(T.any(T::Array[Symbol], FalseClass)),
        unique_by: T.nilable(T.any(T::Array[Symbol], Symbol))
      ).returns(ActiveRecord::Result)
    end
    def insert(attributes, returning: nil, unique_by: nil); end

    sig do
      params(
        attributes: Hash,
        returning: T.nilable(T.any(T::Array[Symbol], FalseClass))
      ).returns(ActiveRecord::Result)
    end
    def insert!(attributes, returning: nil); end

    sig do
      params(
        attributes: T::Array[Hash],
        returning: T.nilable(T.any(T::Array[Symbol], FalseClass)),
        unique_by: T.nilable(T.any(T::Array[Symbol], Symbol))
      ).returns(ActiveRecord::Result)
    end
    def insert_all(attributes, returning: nil, unique_by: nil); end

    sig do
      params(
        attributes: T::Array[Hash],
        returning: T.nilable(T.any(T::Array[Symbol], FalseClass))
      ).returns(ActiveRecord::Result)
    end
    def insert_all!(attributes, returning: nil); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def invert_where(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def joins(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def left_joins(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def left_outer_joins(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def limit(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def lock(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def merge(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def none(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def offset(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def only(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def optimizer_hints(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def or(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def order(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def preload(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def readonly(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def references(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def reorder(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def reselect(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def reverse_chronological(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def reverse_order(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def rewhere(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def select(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def strict_loading(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def structurally_compatible?(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def uniq!(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def unscope(*args, &blk); end

    sig do
      params(
        attributes: Hash,
        returning: T.nilable(T.any(T::Array[Symbol], FalseClass)),
        unique_by: T.nilable(T.any(T::Array[Symbol], Symbol))
      ).returns(ActiveRecord::Result)
    end
    def upsert(attributes, returning: nil, unique_by: nil); end

    sig do
      params(
        attributes: T::Array[Hash],
        returning: T.nilable(T.any(T::Array[Symbol], FalseClass)),
        unique_by: T.nilable(T.any(T::Array[Symbol], Symbol))
      ).returns(ActiveRecord::Result)
    end
    def upsert_all(attributes, returning: nil, unique_by: nil); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelationWhereChain) }
    def where(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateAssociationRelation) }
    def without(*args, &blk); end
  end

  module GeneratedAttributeMethods
    sig { returns(::String) }
    def account_id; end

    sig { params(value: ::String).returns(::String) }
    def account_id=(value); end

    sig { returns(T::Boolean) }
    def account_id?; end

    sig { returns(T.nilable(::String)) }
    def account_id_before_last_save; end

    sig { returns(T.untyped) }
    def account_id_before_type_cast; end

    sig { returns(T::Boolean) }
    def account_id_came_from_user?; end

    sig { returns(T.nilable([::String, ::String])) }
    def account_id_change; end

    sig { returns(T.nilable([::String, ::String])) }
    def account_id_change_to_be_saved; end

    sig { returns(T::Boolean) }
    def account_id_changed?; end

    sig { returns(T.nilable(::String)) }
    def account_id_in_database; end

    sig { returns(T.nilable([::String, ::String])) }
    def account_id_previous_change; end

    sig { returns(T::Boolean) }
    def account_id_previously_changed?; end

    sig { returns(T.nilable(::String)) }
    def account_id_previously_was; end

    sig { returns(T.nilable(::String)) }
    def account_id_was; end

    sig { void }
    def account_id_will_change!; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def created_at; end

    sig { params(value: ::ActiveSupport::TimeWithZone).returns(::ActiveSupport::TimeWithZone) }
    def created_at=(value); end

    sig { returns(T::Boolean) }
    def created_at?; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def created_at_before_last_save; end

    sig { returns(T.untyped) }
    def created_at_before_type_cast; end

    sig { returns(T::Boolean) }
    def created_at_came_from_user?; end

    sig { returns(T.nilable([T.nilable(::ActiveSupport::TimeWithZone), T.nilable(::ActiveSupport::TimeWithZone)])) }
    def created_at_change; end

    sig { returns(T.nilable([T.nilable(::ActiveSupport::TimeWithZone), T.nilable(::ActiveSupport::TimeWithZone)])) }
    def created_at_change_to_be_saved; end

    sig { returns(T::Boolean) }
    def created_at_changed?; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def created_at_in_database; end

    sig { returns(T.nilable([T.nilable(::ActiveSupport::TimeWithZone), T.nilable(::ActiveSupport::TimeWithZone)])) }
    def created_at_previous_change; end

    sig { returns(T::Boolean) }
    def created_at_previously_changed?; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def created_at_previously_was; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def created_at_was; end

    sig { void }
    def created_at_will_change!; end

    sig { returns(::String) }
    def email; end

    sig { params(value: ::String).returns(::String) }
    def email=(value); end

    sig { returns(T::Boolean) }
    def email?; end

    sig { returns(T.nilable(::String)) }
    def email_before_last_save; end

    sig { returns(T.untyped) }
    def email_before_type_cast; end

    sig { returns(T::Boolean) }
    def email_came_from_user?; end

    sig { returns(T.nilable([::String, ::String])) }
    def email_change; end

    sig { returns(T.nilable([::String, ::String])) }
    def email_change_to_be_saved; end

    sig { returns(T::Boolean) }
    def email_changed?; end

    sig { returns(T.nilable(::String)) }
    def email_in_database; end

    sig { returns(T.nilable([::String, ::String])) }
    def email_previous_change; end

    sig { returns(T::Boolean) }
    def email_previously_changed?; end

    sig { returns(T.nilable(::String)) }
    def email_previously_was; end

    sig { returns(T.nilable(::String)) }
    def email_was; end

    sig { void }
    def email_will_change!; end

    sig { returns(::String) }
    def first_name; end

    sig { params(value: ::String).returns(::String) }
    def first_name=(value); end

    sig { returns(T::Boolean) }
    def first_name?; end

    sig { returns(T.nilable(::String)) }
    def first_name_before_last_save; end

    sig { returns(T.untyped) }
    def first_name_before_type_cast; end

    sig { returns(T::Boolean) }
    def first_name_came_from_user?; end

    sig { returns(T.nilable([::String, ::String])) }
    def first_name_change; end

    sig { returns(T.nilable([::String, ::String])) }
    def first_name_change_to_be_saved; end

    sig { returns(T::Boolean) }
    def first_name_changed?; end

    sig { returns(T.nilable(::String)) }
    def first_name_in_database; end

    sig { returns(T.nilable([::String, ::String])) }
    def first_name_previous_change; end

    sig { returns(T::Boolean) }
    def first_name_previously_changed?; end

    sig { returns(T.nilable(::String)) }
    def first_name_previously_was; end

    sig { returns(T.nilable(::String)) }
    def first_name_was; end

    sig { void }
    def first_name_will_change!; end

    sig { returns(T.nilable(::String)) }
    def id; end

    sig { params(value: ::String).returns(::String) }
    def id=(value); end

    sig { returns(T::Boolean) }
    def id?; end

    sig { returns(T.nilable(::String)) }
    def id_before_last_save; end

    sig { returns(T.untyped) }
    def id_before_type_cast; end

    sig { returns(T::Boolean) }
    def id_came_from_user?; end

    sig { returns(T.nilable([T.nilable(::String), T.nilable(::String)])) }
    def id_change; end

    sig { returns(T.nilable([T.nilable(::String), T.nilable(::String)])) }
    def id_change_to_be_saved; end

    sig { returns(T::Boolean) }
    def id_changed?; end

    sig { returns(T.nilable(::String)) }
    def id_in_database; end

    sig { returns(T.nilable([T.nilable(::String), T.nilable(::String)])) }
    def id_previous_change; end

    sig { returns(T::Boolean) }
    def id_previously_changed?; end

    sig { returns(T.nilable(::String)) }
    def id_previously_was; end

    sig { returns(T.nilable(::String)) }
    def id_was; end

    sig { void }
    def id_will_change!; end

    sig { returns(::String) }
    def last_name; end

    sig { params(value: ::String).returns(::String) }
    def last_name=(value); end

    sig { returns(T::Boolean) }
    def last_name?; end

    sig { returns(T.nilable(::String)) }
    def last_name_before_last_save; end

    sig { returns(T.untyped) }
    def last_name_before_type_cast; end

    sig { returns(T::Boolean) }
    def last_name_came_from_user?; end

    sig { returns(T.nilable([::String, ::String])) }
    def last_name_change; end

    sig { returns(T.nilable([::String, ::String])) }
    def last_name_change_to_be_saved; end

    sig { returns(T::Boolean) }
    def last_name_changed?; end

    sig { returns(T.nilable(::String)) }
    def last_name_in_database; end

    sig { returns(T.nilable([::String, ::String])) }
    def last_name_previous_change; end

    sig { returns(T::Boolean) }
    def last_name_previously_changed?; end

    sig { returns(T.nilable(::String)) }
    def last_name_previously_was; end

    sig { returns(T.nilable(::String)) }
    def last_name_was; end

    sig { void }
    def last_name_will_change!; end

    sig { void }
    def restore_account_id!; end

    sig { void }
    def restore_created_at!; end

    sig { void }
    def restore_email!; end

    sig { void }
    def restore_first_name!; end

    sig { void }
    def restore_id!; end

    sig { void }
    def restore_last_name!; end

    sig { void }
    def restore_slug!; end

    sig { void }
    def restore_stripe_customer_id!; end

    sig { void }
    def restore_updated_at!; end

    sig { returns(T.nilable([::String, ::String])) }
    def saved_change_to_account_id; end

    sig { returns(T::Boolean) }
    def saved_change_to_account_id?; end

    sig { returns(T.nilable([T.nilable(::ActiveSupport::TimeWithZone), T.nilable(::ActiveSupport::TimeWithZone)])) }
    def saved_change_to_created_at; end

    sig { returns(T::Boolean) }
    def saved_change_to_created_at?; end

    sig { returns(T.nilable([::String, ::String])) }
    def saved_change_to_email; end

    sig { returns(T::Boolean) }
    def saved_change_to_email?; end

    sig { returns(T.nilable([::String, ::String])) }
    def saved_change_to_first_name; end

    sig { returns(T::Boolean) }
    def saved_change_to_first_name?; end

    sig { returns(T.nilable([T.nilable(::String), T.nilable(::String)])) }
    def saved_change_to_id; end

    sig { returns(T::Boolean) }
    def saved_change_to_id?; end

    sig { returns(T.nilable([::String, ::String])) }
    def saved_change_to_last_name; end

    sig { returns(T::Boolean) }
    def saved_change_to_last_name?; end

    sig { returns(T.nilable([::String, ::String])) }
    def saved_change_to_slug; end

    sig { returns(T::Boolean) }
    def saved_change_to_slug?; end

    sig { returns(T.nilable([T.nilable(::String), T.nilable(::String)])) }
    def saved_change_to_stripe_customer_id; end

    sig { returns(T::Boolean) }
    def saved_change_to_stripe_customer_id?; end

    sig { returns(T.nilable([T.nilable(::ActiveSupport::TimeWithZone), T.nilable(::ActiveSupport::TimeWithZone)])) }
    def saved_change_to_updated_at; end

    sig { returns(T::Boolean) }
    def saved_change_to_updated_at?; end

    sig { returns(::String) }
    def slug; end

    sig { params(value: ::String).returns(::String) }
    def slug=(value); end

    sig { returns(T::Boolean) }
    def slug?; end

    sig { returns(T.nilable(::String)) }
    def slug_before_last_save; end

    sig { returns(T.untyped) }
    def slug_before_type_cast; end

    sig { returns(T::Boolean) }
    def slug_came_from_user?; end

    sig { returns(T.nilable([::String, ::String])) }
    def slug_change; end

    sig { returns(T.nilable([::String, ::String])) }
    def slug_change_to_be_saved; end

    sig { returns(T::Boolean) }
    def slug_changed?; end

    sig { returns(T.nilable(::String)) }
    def slug_in_database; end

    sig { returns(T.nilable([::String, ::String])) }
    def slug_previous_change; end

    sig { returns(T::Boolean) }
    def slug_previously_changed?; end

    sig { returns(T.nilable(::String)) }
    def slug_previously_was; end

    sig { returns(T.nilable(::String)) }
    def slug_was; end

    sig { void }
    def slug_will_change!; end

    sig { returns(T.nilable(::String)) }
    def stripe_customer_id; end

    sig { params(value: T.nilable(::String)).returns(T.nilable(::String)) }
    def stripe_customer_id=(value); end

    sig { returns(T::Boolean) }
    def stripe_customer_id?; end

    sig { returns(T.nilable(::String)) }
    def stripe_customer_id_before_last_save; end

    sig { returns(T.untyped) }
    def stripe_customer_id_before_type_cast; end

    sig { returns(T::Boolean) }
    def stripe_customer_id_came_from_user?; end

    sig { returns(T.nilable([T.nilable(::String), T.nilable(::String)])) }
    def stripe_customer_id_change; end

    sig { returns(T.nilable([T.nilable(::String), T.nilable(::String)])) }
    def stripe_customer_id_change_to_be_saved; end

    sig { returns(T::Boolean) }
    def stripe_customer_id_changed?; end

    sig { returns(T.nilable(::String)) }
    def stripe_customer_id_in_database; end

    sig { returns(T.nilable([T.nilable(::String), T.nilable(::String)])) }
    def stripe_customer_id_previous_change; end

    sig { returns(T::Boolean) }
    def stripe_customer_id_previously_changed?; end

    sig { returns(T.nilable(::String)) }
    def stripe_customer_id_previously_was; end

    sig { returns(T.nilable(::String)) }
    def stripe_customer_id_was; end

    sig { void }
    def stripe_customer_id_will_change!; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def updated_at; end

    sig { params(value: ::ActiveSupport::TimeWithZone).returns(::ActiveSupport::TimeWithZone) }
    def updated_at=(value); end

    sig { returns(T::Boolean) }
    def updated_at?; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def updated_at_before_last_save; end

    sig { returns(T.untyped) }
    def updated_at_before_type_cast; end

    sig { returns(T::Boolean) }
    def updated_at_came_from_user?; end

    sig { returns(T.nilable([T.nilable(::ActiveSupport::TimeWithZone), T.nilable(::ActiveSupport::TimeWithZone)])) }
    def updated_at_change; end

    sig { returns(T.nilable([T.nilable(::ActiveSupport::TimeWithZone), T.nilable(::ActiveSupport::TimeWithZone)])) }
    def updated_at_change_to_be_saved; end

    sig { returns(T::Boolean) }
    def updated_at_changed?; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def updated_at_in_database; end

    sig { returns(T.nilable([T.nilable(::ActiveSupport::TimeWithZone), T.nilable(::ActiveSupport::TimeWithZone)])) }
    def updated_at_previous_change; end

    sig { returns(T::Boolean) }
    def updated_at_previously_changed?; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def updated_at_previously_was; end

    sig { returns(T.nilable(::ActiveSupport::TimeWithZone)) }
    def updated_at_was; end

    sig { void }
    def updated_at_will_change!; end

    sig { returns(T::Boolean) }
    def will_save_change_to_account_id?; end

    sig { returns(T::Boolean) }
    def will_save_change_to_created_at?; end

    sig { returns(T::Boolean) }
    def will_save_change_to_email?; end

    sig { returns(T::Boolean) }
    def will_save_change_to_first_name?; end

    sig { returns(T::Boolean) }
    def will_save_change_to_id?; end

    sig { returns(T::Boolean) }
    def will_save_change_to_last_name?; end

    sig { returns(T::Boolean) }
    def will_save_change_to_slug?; end

    sig { returns(T::Boolean) }
    def will_save_change_to_stripe_customer_id?; end

    sig { returns(T::Boolean) }
    def will_save_change_to_updated_at?; end
  end

  module GeneratedRelationMethods
    sig { returns(PrivateRelation) }
    def all; end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def and(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def annotate(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def chronological(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def create_with(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def distinct(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def eager_load(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def except(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def excluding(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def extending(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def extract_associated(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def from(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def group(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def having(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def in_order_of(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def includes(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def invert_where(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def joins(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def left_joins(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def left_outer_joins(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def limit(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def lock(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def merge(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def none(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def offset(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def only(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def optimizer_hints(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def or(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def order(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def preload(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def readonly(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def references(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def reorder(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def reselect(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def reverse_chronological(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def reverse_order(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def rewhere(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def select(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def strict_loading(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def structurally_compatible?(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def uniq!(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def unscope(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelationWhereChain) }
    def where(*args, &blk); end

    sig { params(args: T.untyped, blk: T.untyped).returns(PrivateRelation) }
    def without(*args, &blk); end
  end

  class PrivateAssociationRelation < ::ActiveRecord::AssociationRelation
    include CommonRelationMethods
    include GeneratedAssociationRelationMethods

    Elem = type_member { { fixed: ::Customer } }

    sig { returns(T.self_type) }
    def friendly; end

    sig { returns(T::Array[::Customer]) }
    def to_a; end

    sig { returns(T::Array[::Customer]) }
    def to_ary; end
  end

  class PrivateAssociationRelationWhereChain < PrivateAssociationRelation
    Elem = type_member { { fixed: ::Customer } }

    sig { params(args: T.untyped).returns(PrivateAssociationRelation) }
    def associated(*args); end

    sig { params(args: T.untyped).returns(PrivateAssociationRelation) }
    def missing(*args); end

    sig { params(opts: T.untyped, rest: T.untyped).returns(PrivateAssociationRelation) }
    def not(opts, *rest); end
  end

  class PrivateCollectionProxy < ::ActiveRecord::Associations::CollectionProxy
    include CommonRelationMethods
    include GeneratedAssociationRelationMethods

    Elem = type_member { { fixed: ::Customer } }

    sig do
      params(
        records: T.any(::Customer, T::Enumerable[T.any(::Customer, T::Enumerable[::Customer])])
      ).returns(PrivateCollectionProxy)
    end
    def <<(*records); end

    sig do
      params(
        records: T.any(::Customer, T::Enumerable[T.any(::Customer, T::Enumerable[::Customer])])
      ).returns(PrivateCollectionProxy)
    end
    def append(*records); end

    sig { returns(PrivateCollectionProxy) }
    def clear; end

    sig do
      params(
        records: T.any(::Customer, T::Enumerable[T.any(::Customer, T::Enumerable[::Customer])])
      ).returns(PrivateCollectionProxy)
    end
    def concat(*records); end

    sig do
      params(
        records: T.any(::Customer, Integer, String, T::Enumerable[T.any(::Customer, Integer, String, T::Enumerable[::Customer])])
      ).returns(T::Array[::Customer])
    end
    def delete(*records); end

    sig do
      params(
        records: T.any(::Customer, Integer, String, T::Enumerable[T.any(::Customer, Integer, String, T::Enumerable[::Customer])])
      ).returns(T::Array[::Customer])
    end
    def destroy(*records); end

    sig { returns(T.self_type) }
    def friendly; end

    sig { returns(T::Array[::Customer]) }
    def load_target; end

    sig do
      params(
        records: T.any(::Customer, T::Enumerable[T.any(::Customer, T::Enumerable[::Customer])])
      ).returns(PrivateCollectionProxy)
    end
    def prepend(*records); end

    sig do
      params(
        records: T.any(::Customer, T::Enumerable[T.any(::Customer, T::Enumerable[::Customer])])
      ).returns(PrivateCollectionProxy)
    end
    def push(*records); end

    sig do
      params(
        other_array: T.any(::Customer, T::Enumerable[T.any(::Customer, T::Enumerable[::Customer])])
      ).returns(T::Array[::Customer])
    end
    def replace(other_array); end

    sig { returns(PrivateAssociationRelation) }
    def scope; end

    sig { returns(T::Array[::Customer]) }
    def target; end

    sig { returns(T::Array[::Customer]) }
    def to_a; end

    sig { returns(T::Array[::Customer]) }
    def to_ary; end
  end

  class PrivateRelation < ::ActiveRecord::Relation
    include CommonRelationMethods
    include GeneratedRelationMethods

    Elem = type_member { { fixed: ::Customer } }

    sig { returns(T.self_type) }
    def friendly; end

    sig { returns(T::Array[::Customer]) }
    def to_a; end

    sig { returns(T::Array[::Customer]) }
    def to_ary; end
  end

  class PrivateRelationWhereChain < PrivateRelation
    Elem = type_member { { fixed: ::Customer } }

    sig { params(args: T.untyped).returns(PrivateRelation) }
    def associated(*args); end

    sig { params(args: T.untyped).returns(PrivateRelation) }
    def missing(*args); end

    sig { params(opts: T.untyped, rest: T.untyped).returns(PrivateRelation) }
    def not(opts, *rest); end
  end
end
