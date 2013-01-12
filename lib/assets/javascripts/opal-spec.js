// lib/opal-spec/browser_formatter.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __klass = __opal.klass;
  return (function(__base){
    function OpalSpec() {};
    OpalSpec = __module(__base, "OpalSpec", OpalSpec);
    var def = OpalSpec.prototype, __scope = OpalSpec._scope;

    (function(__base, __super){
      function BrowserFormatter() {};
      BrowserFormatter = __klass(__base, __super, "BrowserFormatter", BrowserFormatter);

      var def = BrowserFormatter.prototype, __scope = BrowserFormatter._scope;
      def.start_time = def.failed_examples = def.summary_element = def.groups_element = def.example_group_failed = def.group_element = def.examples = def.example_list = nil;

      __scope.CSS = "\n      body {\n        font-size: 14px;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      }\n\n      pre {\n        font-family: \"Bitstream Vera Sans Mono\", Monaco, \"Lucida Console\", monospace;\n        font-size: 12px;\n        color: #444444;\n        white-space: pre;\n        padding: 3px 0px 3px 12px;\n        margin: 0px 0px 8px;\n\n        background: #FAFAFA;\n        -webkit-box-shadow: rgba(0,0,0,0.07) 0 1px 2px inset;\n        -webkit-border-radius: 3px;\n        -moz-border-radius: 3px;\n        border-radius: 3px;\n        border: 1px solid #DDDDDD;\n      }\n\n      ul.example_groups {\n        list-style-type: none;\n      }\n\n      li.group.passed .group_description {\n        color: #597800;\n        font-weight: bold;\n      }\n\n      li.group.failed .group_description {\n        color: #FF000E;\n        font-weight: bold;\n      }\n\n      li.example.passed {\n        color: #597800;\n      }\n\n      li.example.failed {\n        color: #FF000E;\n      }\n\n      .examples {\n        list-style-type: none;\n      }\n    ";

      def.$initialize = function() {
        
        this.examples = [];
        return this.failed_examples = [];
      };

      def.$start = function() {
        
        
        if (!document || !document.body) {
          this.$raise("Not running in browser.");
        }

        var summary_element = document.createElement('p');
        summary_element.className = 'summary';
        summary_element.innerHTML = "Running...";

        var groups_element = document.createElement('ul');
        groups_element.className = 'example_groups';

        var target = document.getElementById('opal-spec-output');

        if (!target) {
          target = document.body;
        }

        target.appendChild(summary_element);
        target.appendChild(groups_element);

        var styles = document.createElement('style');
        styles.type = 'text/css';

        if (styles.styleSheet) {
          styles.styleSheet.cssText = __scope.CSS;
        }
        else {
          styles.appendChild(document.createTextNode(__scope.CSS));
        }

        document.getElementsByTagName('head')[0].appendChild(styles);
      
        this.start_time = __scope.Time.$now().$to_f();
        this.groups_element = groups_element;
        return this.summary_element = summary_element;
      };

      def.$finish = function() {
        var time = nil, text = nil;
        time = __scope.Time.$now().$to_f()['$-'](this.start_time);
        text = "\n" + (this.$example_count()) + " examples, " + (this.failed_examples.$size()) + " failures (time taken: " + (time) + ")";
        return this.summary_element.innerHTML = text;
      };

      def.$example_group_started = function(group) {
        
        this.example_group = group;
        this.example_group_failed = false;
        
        var group_element = document.createElement('li');

        var description = document.createElement('span');
        description.className = 'group_description';
        description.innerHTML = group.$description().$to_s();
        group_element.appendChild(description);

        var example_list = document.createElement('ul');
        example_list.className = 'examples';
        group_element.appendChild(example_list);

        this.groups_element.appendChild(group_element);
      
        this.group_element = group_element;
        return this.example_list = example_list;
      };

      def.$example_group_finished = function(group) {
        var _a;
        if ((_a = this.example_group_failed) !== false && _a !== nil) {
          return this.group_element.className = 'group failed';
          } else {
          return this.group_element.className = 'group passed';
        }
      };

      def.$example_started = function(example) {
        
        this.examples['$<<'](example);
        return this.example = example;
      };

      def.$example_failed = function(example) {
        var exception = nil, $case = nil, output = nil;
        this.failed_examples['$<<'](example);
        this.example_group_failed = true;
        exception = example.$exception();
        $case = exception;if ((__scope.OpalSpec)._scope.ExpectationNotMetError['$===']($case)) {
        output = exception.$message()
        }
        else {output = "" + (exception.$class().$name()) + ": " + (exception.$message()) + "\n";
        output = output['$+']("    " + (exception.$backtrace().$join("\n    ")) + "\n");};
        
        var wrapper = document.createElement('li');
        wrapper.className = 'example failed';

        var description = document.createElement('span');
        description.className = 'example_description';
        description.innerHTML = example.$description();

        var exception = document.createElement('pre');
        exception.className = 'exception';
        exception.innerHTML = output;

        wrapper.appendChild(description);
        wrapper.appendChild(exception);

        this.example_list.appendChild(wrapper);
        this.example_list.style.display = 'list-item';
      
      };

      def.$example_passed = function(example) {
        
        
        var wrapper = document.createElement('li');
        wrapper.className = 'example passed';

        var description = document.createElement('span');
        description.className = 'example_description';
        description.innerHTML = example.$description();

        wrapper.appendChild(description);
        this.example_list.appendChild(wrapper);
      
      };

      def.$example_count = function() {
        
        return this.examples.$size();
      };

      return nil;
    })(OpalSpec, null)
    
  })(self)
})();
// lib/opal-spec/example.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __klass = __opal.klass;
  return (function(__base){
    function OpalSpec() {};
    OpalSpec = __module(__base, "OpalSpec", OpalSpec);
    var def = OpalSpec.prototype, __scope = OpalSpec._scope;

    (function(__base, __super){
      function Example() {};
      Example = __klass(__base, __super, "Example", Example);

      var def = Example.prototype, __scope = Example._scope, TMP_3, TMP_4;
      def.description = def.example_group = def.exception = def.asynchronous = def.__block__ = nil;

      def.$description = function() {
        
        return this.description
      }, 
      def.$example_group = function() {
        
        return this.example_group
      }, 
      def.$exception = function() {
        
        return this.exception
      }, nil;

      def.$asynchronous = function() {
        
        return this.asynchronous
      }, 
      def['$asynchronous='] = function(val) {
        
        return this.asynchronous = val
      }, nil;

      def.$initialize = function(group, desc, block) {
        
        this.example_group = group;
        this.description = desc;
        return this.__block__ = block;
      };

      def.$finish_running = function() {
        var _a;
        if ((_a = this.exception) !== false && _a !== nil) {
          return this.example_group.$example_failed(this)
          } else {
          return this.example_group.$example_passed(this)
        }
      };

      def.$run = function() {
        var e = nil, _a, _b;
        try {
          this.example_group.$example_started(this);
          this.$run_before_hooks();
          (_a = this, _a.$instance_eval._p = this.__block__.$to_proc(), _a.$instance_eval());
        } catch ($err) {
        if (true) {
          e = $err;this.exception = e}
        else { throw $err; }
        }
        finally {
        if ((_b = this.asynchronous) === false || _b === nil) {
          this.$run_after_hooks()
        }};
        if ((_b = this.asynchronous) !== false && _b !== nil) {
          return nil
          } else {
          return this.$finish_running()
        }
      };

      def.$run_after_hooks = function() {
        var e = nil, TMP_1, _a;
        try {
          return (_a = this.example_group.$after_hooks(), _a.$each._p = (TMP_1 = function(after) {

            var self = TMP_1._s || this, _a;
            if (after == null) after = nil;

            return (_a = self, _a.$instance_eval._p = after.$to_proc(), _a.$instance_eval())
          }, TMP_1._s = this, TMP_1), _a.$each())
        } catch ($err) {
        if (true) {
          e = $err;this.exception = e}
        else { throw $err; }
        };
      };

      def.$run_before_hooks = function() {
        var TMP_2, _a;
        return (_a = this.example_group.$before_hooks(), _a.$each._p = (TMP_2 = function(before) {

          var self = TMP_2._s || this, _a;
          if (before == null) before = nil;

          return (_a = self, _a.$instance_eval._p = before.$to_proc(), _a.$instance_eval())
        }, TMP_2._s = this, TMP_2), _a.$each());
      };

      def.$run_async = TMP_3 = function() {
        var e = nil, block;
        block = TMP_3._p || nil, TMP_3._p = null;
        
        try {
          block.$call()
        } catch ($err) {
        if (true) {
          e = $err;this.exception = e}
        else { throw $err; }
        }
        finally {
        this.$run_after_hooks()};
        return this.$finish_running();
      };

      def.$set_timeout = TMP_4 = function(duration) {
        var block;
        block = TMP_4._p || nil, TMP_4._p = null;
        
        
        setTimeout(function() {
          block.$call();
        }, duration);
      
        return this;
      };

      return nil;
    })(OpalSpec, null)
    
  })(self)
})();
// lib/opal-spec/example_group.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __klass = __opal.klass;
  return (function(__base){
    function OpalSpec() {};
    OpalSpec = __module(__base, "OpalSpec", OpalSpec);
    var def = OpalSpec.prototype, __scope = OpalSpec._scope;

    (function(__base, __super){
      function ExampleGroup() {};
      ExampleGroup = __klass(__base, __super, "ExampleGroup", ExampleGroup);

      ;ExampleGroup._sdonate(["$example_groups", "$create"]);      var def = ExampleGroup.prototype, __scope = ExampleGroup._scope, TMP_1, TMP_2, TMP_3, TMP_4;
      def.examples = def.before_hooks = def.after_hooks = def.parent = def.runner = def.running_examples = def.desc = nil;

      ExampleGroup.example_groups = [];

      ExampleGroup.$example_groups = function() {
        
        if (this.example_groups == null) this.example_groups = nil;

        return this.example_groups
      };

      ExampleGroup.stack = [];

      ExampleGroup.$create = function(desc, block) {
        var group = nil, _a;
        if (this.stack == null) this.stack = nil;
        if (this.example_groups == null) this.example_groups = nil;

        group = this.$new(desc, this.stack.$last());
        this.example_groups['$<<'](group);
        this.stack['$<<'](group);
        (_a = group, _a.$instance_eval._p = block.$to_proc(), _a.$instance_eval());
        return this.stack.$pop();
      };

      def.$initialize = function(desc, parent) {
        
        this.desc = desc.$to_s();
        this.parent = parent;
        this.examples = [];
        this.before_hooks = [];
        return this.after_hooks = [];
      };

      def.$it = TMP_1 = function(desc) {
        var block;
        block = TMP_1._p || nil, TMP_1._p = null;
        
        return this.examples['$<<'](__scope.Example.$new(this, desc, block));
      };

      def.$async = TMP_2 = function(desc) {
        var example = nil, block;
        block = TMP_2._p || nil, TMP_2._p = null;
        
        example = __scope.Example.$new(this, desc, block);
        example['$asynchronous='](true);
        return this.examples['$<<'](example);
      };

      def.$it_behaves_like = function(objs) {
        objs = __slice.call(arguments, 0);
        return nil;
      };

      def.$before = TMP_3 = function(type) {
        var _a, block;
        block = TMP_3._p || nil, TMP_3._p = null;
        if (type == null) {
          type = "each"
        }
        if ((_a = type['$==']("each")) === false || _a === nil) {
          this.$raise("unsupported before type: " + (type))
        }
        return this.before_hooks['$<<'](block);
      };

      def.$after = TMP_4 = function(type) {
        var _a, block;
        block = TMP_4._p || nil, TMP_4._p = null;
        if (type == null) {
          type = "each"
        }
        if ((_a = type['$==']("each")) === false || _a === nil) {
          this.$raise("unsupported after type: " + (type))
        }
        return this.after_hooks['$<<'](block);
      };

      def.$before_hooks = function() {
        var _a;
        if ((_a = this.parent) !== false && _a !== nil) {
          return [].$concat(this.parent.$before_hooks()).$concat(this.before_hooks)
          } else {
          return this.before_hooks
        }
      };

      def.$after_hooks = function() {
        var _a;
        if ((_a = this.parent) !== false && _a !== nil) {
          return [].$concat(this.parent.$after_hooks()).$concat(this.after_hooks)
          } else {
          return this.after_hooks
        }
      };

      def.$run = function(runner) {
        
        this.runner = runner;
        this.runner.$example_group_started(this);
        this.running_examples = this.examples.$dup();
        return this.$run_next_example();
      };

      def.$run_next_example = function() {
        var _a;
        if ((_a = this.running_examples['$empty?']()) !== false && _a !== nil) {
          return this.runner.$example_group_finished(this)
          } else {
          return this.running_examples.$shift().$run()
        }
      };

      def.$example_started = function(example) {
        
        return this.runner.$example_started(example);
      };

      def.$example_passed = function(example) {
        
        this.runner.$example_passed(example);
        return this.$run_next_example();
      };

      def.$example_failed = function(example) {
        
        this.runner.$example_failed(example);
        return this.$run_next_example();
      };

      def.$description = function() {
        var _a;
        if ((_a = this.parent) !== false && _a !== nil) {
          return "" + (this.parent.$description()) + " " + (this.desc)
          } else {
          return this.desc
        }
      };

      return nil;
    })(OpalSpec, null)
    
  })(self)
})();
// lib/opal-spec/expectations.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __klass = __opal.klass;
  (function(__base){
    function OpalSpec() {};
    OpalSpec = __module(__base, "OpalSpec", OpalSpec);
    var def = OpalSpec.prototype, __scope = OpalSpec._scope;

    (function(__base, __super){
      function ExpectationNotMetError() {};
      ExpectationNotMetError = __klass(__base, __super, "ExpectationNotMetError", ExpectationNotMetError);

      var def = ExpectationNotMetError.prototype, __scope = ExpectationNotMetError._scope;

      return nil
    })(OpalSpec, __scope.StandardError);

    (function(__base){
      function Expectations() {};
      Expectations = __module(__base, "Expectations", Expectations);
      var def = Expectations.prototype, __scope = Expectations._scope;

      def.$should = function(matcher) {
        if (matcher == null) {
          matcher = nil
        }
        if (matcher !== false && matcher !== nil) {
          return matcher.$match(this)
          } else {
          return (__scope.OpalSpec)._scope.PositiveOperatorMatcher.$new(this)
        }
      };

      def.$should_not = function(matcher) {
        if (matcher == null) {
          matcher = nil
        }
        if (matcher !== false && matcher !== nil) {
          return matcher.$not_match(this)
          } else {
          return (__scope.OpalSpec)._scope.NegativeOperatorMatcher.$new(this)
        }
      };

      def.$be_kind_of = function(expected) {
        
        return (__scope.OpalSpec)._scope.BeKindOfMatcher.$new(expected);
      };

      def.$be_nil = function() {
        
        return (__scope.OpalSpec)._scope.BeNilMatcher.$new(nil);
      };

      def.$be_true = function() {
        
        return (__scope.OpalSpec)._scope.BeTrueMatcher.$new(true);
      };

      def.$be_false = function() {
        
        return (__scope.OpalSpec)._scope.BeFalseMatcher.$new(false);
      };

      def.$eq = function(expected) {
        
        return (__scope.OpalSpec)._scope.EqlMatcher.$new(expected);
      };

      def.$equal = function(expected) {
        
        return (__scope.OpalSpec)._scope.EqualMatcher.$new(expected);
      };

      def.$raise_error = function(expected) {
        
        return (__scope.OpalSpec)._scope.RaiseErrorMatcher.$new(expected);
      };
            ;Expectations._donate(["$should", "$should_not", "$be_kind_of", "$be_nil", "$be_true", "$be_false", "$eq", "$equal", "$raise_error"]);
    })(OpalSpec);
    
  })(self);
  return (function(__base, __super){
    function Object() {};
    Object = __klass(__base, __super, "Object", Object);

    var def = Object.prototype, __scope = Object._scope;

    return Object.$include((__scope.OpalSpec)._scope.Expectations)
  })(self, null);
})();
// lib/opal-spec/kernel.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module;
  return (function(__base){
    function Kernel() {};
    Kernel = __module(__base, "Kernel", Kernel);
    var def = Kernel.prototype, __scope = Kernel._scope, TMP_1;

    def.$describe = TMP_1 = function(desc) {
      var block;
      block = TMP_1._p || nil, TMP_1._p = null;
      
      return (__scope.OpalSpec)._scope.ExampleGroup.$create(desc, block);
    };

    def.$mock = function(obj) {
      
      return __scope.Object.$new();
    };
        ;Kernel._donate(["$describe", "$mock"]);
  })(self)
})();
// lib/opal-spec/matchers.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __klass = __opal.klass;
  return (function(__base){
    function OpalSpec() {};
    OpalSpec = __module(__base, "OpalSpec", OpalSpec);
    var def = OpalSpec.prototype, __scope = OpalSpec._scope;

    (function(__base, __super){
      function Matcher() {};
      Matcher = __klass(__base, __super, "Matcher", Matcher);

      var def = Matcher.prototype, __scope = Matcher._scope;

      def.$initialize = function(actual) {
        
        return this.actual = actual;
      };

      def.$failure = function(message) {
        
        return this.$raise((__scope.OpalSpec)._scope.ExpectationNotMetError, message);
      };

      return nil;
    })(OpalSpec, null);

    (function(__base, __super){
      function PositiveOperatorMatcher() {};
      PositiveOperatorMatcher = __klass(__base, __super, "PositiveOperatorMatcher", PositiveOperatorMatcher);

      var def = PositiveOperatorMatcher.prototype, __scope = PositiveOperatorMatcher._scope;
      def.actual = nil;

      def['$=='] = function(expected) {
        
        if (this.actual['$=='](expected)) {
          return true
          } else {
          return this.$failure("expected: " + (expected.$inspect()) + ", got: " + (this.actual.$inspect()) + " (using ==).")
        }
      };

      return nil;
    })(OpalSpec, __scope.Matcher);

    (function(__base, __super){
      function NegativeOperatorMatcher() {};
      NegativeOperatorMatcher = __klass(__base, __super, "NegativeOperatorMatcher", NegativeOperatorMatcher);

      var def = NegativeOperatorMatcher.prototype, __scope = NegativeOperatorMatcher._scope;
      def.actual = nil;

      def['$=='] = function(expected) {
        
        if (this.actual['$=='](expected)) {
          return this.$failure("expected: " + (expected.$inspect()) + " not to be " + (this.actual.$inspect()) + " (using ==).")
          } else {
          return nil
        }
      };

      return nil;
    })(OpalSpec, __scope.Matcher);

    (function(__base, __super){
      function BeKindOfMatcher() {};
      BeKindOfMatcher = __klass(__base, __super, "BeKindOfMatcher", BeKindOfMatcher);

      var def = BeKindOfMatcher.prototype, __scope = BeKindOfMatcher._scope;
      def.actual = nil;

      def.$match = function(expected) {
        var _a;
        if ((_a = expected['$kind_of?'](this.actual)) !== false && _a !== nil) {
          return nil
          } else {
          return this.$failure("expected " + (expected.$inspect()) + " to be a kind of " + (this.actual.$name()) + ", not " + (expected.$class().$name()) + ".")
        }
      };

      return nil;
    })(OpalSpec, __scope.Matcher);

    (function(__base, __super){
      function BeNilMatcher() {};
      BeNilMatcher = __klass(__base, __super, "BeNilMatcher", BeNilMatcher);

      var def = BeNilMatcher.prototype, __scope = BeNilMatcher._scope;

      def.$match = function(expected) {
        var _a;
        if ((_a = expected['$nil?']()) !== false && _a !== nil) {
          return nil
          } else {
          return this.$failure("expected " + (expected.$inspect()) + " to be nil.")
        }
      };

      return nil;
    })(OpalSpec, __scope.Matcher);

    (function(__base, __super){
      function BeTrueMatcher() {};
      BeTrueMatcher = __klass(__base, __super, "BeTrueMatcher", BeTrueMatcher);

      var def = BeTrueMatcher.prototype, __scope = BeTrueMatcher._scope;

      def.$match = function(expected) {
        
        if (expected['$=='](true)) {
          return nil
          } else {
          return this.$failure("expected " + (expected.$inspect()) + " to be true.")
        }
      };

      return nil;
    })(OpalSpec, __scope.Matcher);

    (function(__base, __super){
      function BeFalseMatcher() {};
      BeFalseMatcher = __klass(__base, __super, "BeFalseMatcher", BeFalseMatcher);

      var def = BeFalseMatcher.prototype, __scope = BeFalseMatcher._scope;

      def.$match = function(expected) {
        
        if (expected['$=='](false)) {
          return nil
          } else {
          return this.$failure("expected " + (expected.$inspect()) + " to be false.")
        }
      };

      return nil;
    })(OpalSpec, __scope.Matcher);

    (function(__base, __super){
      function EqlMatcher() {};
      EqlMatcher = __klass(__base, __super, "EqlMatcher", EqlMatcher);

      var def = EqlMatcher.prototype, __scope = EqlMatcher._scope;
      def.actual = nil;

      def.$match = function(expected) {
        
        if (expected['$=='](this.actual)) {
          return nil
          } else {
          return this.$failure("expected: " + (expected.$inspect()) + ", got: " + (this.actual.$inspect()) + " (using ==).")
        }
      };

      def.$not_match = function(expected) {
        var _a;
        if ((_a = expected['$equal?'](this.actual)) !== false && _a !== nil) {
          return this.$failure("expected: " + (expected.$inspect()) + " not to be " + (this.actual.$inspect()) + " (using ==).")
          } else {
          return nil
        }
      };

      return nil;
    })(OpalSpec, __scope.Matcher);

    (function(__base, __super){
      function EqualMatcher() {};
      EqualMatcher = __klass(__base, __super, "EqualMatcher", EqualMatcher);

      var def = EqualMatcher.prototype, __scope = EqualMatcher._scope;
      def.actual = nil;

      def.$match = function(expected) {
        var _a;
        if ((_a = expected['$equal?'](this.actual)) !== false && _a !== nil) {
          return nil
          } else {
          return this.$failure("expected " + (this.actual.$inspect()) + " to be the same as " + (expected.$inspect()) + ".")
        }
      };

      def.$not_match = function(expected) {
        var _a;
        if ((_a = expected['$equal?'](this.actual)) !== false && _a !== nil) {
          return this.$failure("expected " + (this.actual.$inspect()) + " not to be equal to " + (expected.$inspect()) + ".")
          } else {
          return nil
        }
      };

      return nil;
    })(OpalSpec, __scope.Matcher);

    (function(__base, __super){
      function RaiseErrorMatcher() {};
      RaiseErrorMatcher = __klass(__base, __super, "RaiseErrorMatcher", RaiseErrorMatcher);

      var def = RaiseErrorMatcher.prototype, __scope = RaiseErrorMatcher._scope;
      def.actual = nil;

      def.$match = function(block) {
        var should_raise = nil, e = nil;
        should_raise = false;
        try {
          block.$call();
          should_raise = true;
        } catch ($err) {
        if (true) {
          e = $err;nil}
        else { throw $err; }
        };
        if (should_raise !== false && should_raise !== nil) {
          return this.$failure("expected " + (this.actual) + " to be raised, but nothing was.")
          } else {
          return nil
        }
      };

      return nil;
    })(OpalSpec, __scope.Matcher);
    
  })(self)
})();
// lib/opal-spec/phantom_formatter.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __klass = __opal.klass;
  return (function(__base){
    function OpalSpec() {};
    OpalSpec = __module(__base, "OpalSpec", OpalSpec);
    var def = OpalSpec.prototype, __scope = OpalSpec._scope;

    (function(__base, __super){
      function PhantomFormatter() {};
      PhantomFormatter = __klass(__base, __super, "PhantomFormatter", PhantomFormatter);

      var def = PhantomFormatter.prototype, __scope = PhantomFormatter._scope;
      def.start_time = def.failed_examples = def.examples = nil;

      def.$initialize = function() {
        
        this.examples = [];
        return this.failed_examples = [];
      };

      def.$log_green = function(str) {
        
        return console.log('\033[32m' + str + '\033[0m');
      };

      def.$log_red = function(str) {
        
        return console.log('\033[31m' + str + '\033[0m');
      };

      def.$log = function(str) {
        
        return console.log(str);
      };

      def.$start = function() {
        
        return this.start_time = __scope.Time.$now().$to_f();
      };

      def.$finish = function() {
        var time = nil, _a, TMP_1;
        time = __scope.Time.$now().$to_f()['$-'](this.start_time);
        if ((_a = this.failed_examples['$empty?']()) !== false && _a !== nil) {
          this.$log("\nFinished");
          this.$log_green("" + (this.$example_count()) + " examples, 0 failures (time taken: " + (time) + ")");
          return this.$finish_with_code(0);
          } else {
          this.$log("\nFailures:");
          (_a = this.failed_examples, _a.$each_with_index._p = (TMP_1 = function(example, idx) {

            var exception = nil, $case = nil, output = nil, self = TMP_1._s || this;
            if (example == null) example = nil;
if (idx == null) idx = nil;

            self.$log("\n  " + (idx['$+'](1)) + ". " + (example.$example_group().$description()) + " " + (example.$description()));
            exception = example.$exception();
            $case = exception;if ((__scope.OpalSpec)._scope.ExpectationNotMetError['$===']($case)) {
            output = exception.$message()
            }
            else {output = "" + (exception.$class().$name()) + ": " + (exception.$message()) + "\n";
            output = output['$+']("      " + (exception.$backtrace().$join("\n      ")) + "\n");};
            return self.$log_red("    " + (output));
          }, TMP_1._s = this, TMP_1), _a.$each_with_index());
          this.$log("\nFinished");
          this.$log_red("" + (this.$example_count()) + " examples, " + (this.failed_examples.$size()) + " failures (time taken: " + (time) + ")");
          return this.$finish_with_code(1);
        }
      };

      def.$finish_with_code = function(code) {
        
        
        if (typeof(phantom) !== 'undefined') {
          return phantom.exit(code);
        }
        else {
          window.OPAL_SPEC_CODE = code;
        }
      
      };

      def.$example_group_started = function(group) {
        
        this.example_group = group;
        this.example_group_failed = false;
        return this.$log("\n" + (group.$description()));
      };

      def.$example_group_finished = function(group) {
        
        return nil;
      };

      def.$example_started = function(example) {
        
        this.examples['$<<'](example);
        return this.example = example;
      };

      def.$example_failed = function(example) {
        
        this.failed_examples['$<<'](example);
        this.example_group_failed = true;
        return this.$log_red("  " + (example.$description()));
      };

      def.$example_passed = function(example) {
        
        return this.$log_green("  " + (example.$description()));
      };

      def.$example_count = function() {
        
        return this.examples.$size();
      };

      return nil;
    })(OpalSpec, null)
    
  })(self)
})();
// lib/opal-spec/runner.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __klass = __opal.klass;
  return (function(__base){
    function OpalSpec() {};
    OpalSpec = __module(__base, "OpalSpec", OpalSpec);
    var def = OpalSpec.prototype, __scope = OpalSpec._scope;

    (function(__base, __super){
      function Runner() {};
      Runner = __klass(__base, __super, "Runner", Runner);

      ;Runner._sdonate(["$in_browser?", "$in_phantom?", "$autorun"]);      var def = Runner.prototype, __scope = Runner._scope;
      def.formatter = def.groups = nil;

      Runner['$in_browser?'] = function() {
        
        
        if (typeof(window) !== 'undefined' && typeof(document) !== 'undefined') {
          return true;
        }

        return false;
      
      };

      Runner['$in_phantom?'] = function() {
        
        
        if (typeof(phantom) !== 'undefined' || typeof(OPAL_SPEC_PHANTOM) !== 'undefined') {
          return true;
        }

        return false;
      
      };

      Runner.$autorun = function() {
        var _a;
        if ((_a = this['$in_browser?']()) !== false && _a !== nil) {
          
          setTimeout(function() {
            __scope.Runner.$new().$run();
          }, 0);
        
          } else {
          return __scope.Runner.$new().$run()
        }
      };

      def.$initialize = function() {
        var _a;
        if ((_a = __scope.Runner['$in_phantom?']()) !== false && _a !== nil) {
          return this.formatter = __scope.PhantomFormatter.$new()
          } else {
          if ((_a = __scope.Runner['$in_browser?']()) !== false && _a !== nil) {
            return this.formatter = __scope.BrowserFormatter.$new()
            } else {
            return nil
          }
        }
      };

      def.$run = function() {
        
        this.groups = __scope.ExampleGroup.$example_groups().$dup();
        this.formatter.$start();
        return this.$run_next_group();
      };

      def.$run_next_group = function() {
        var _a;
        if ((_a = this.groups['$empty?']()) !== false && _a !== nil) {
          return this.formatter.$finish()
          } else {
          return this.groups.$shift().$run(this)
        }
      };

      def.$example_group_started = function(group) {
        
        return this.formatter.$example_group_started(group);
      };

      def.$example_group_finished = function(group) {
        
        this.formatter.$example_group_finished(group);
        return this.$run_next_group();
      };

      def.$example_started = function(example) {
        
        return this.formatter.$example_started(example);
      };

      def.$example_passed = function(example) {
        
        return this.formatter.$example_passed(example);
      };

      def.$example_failed = function(example) {
        
        return this.formatter.$example_failed(example);
      };

      return nil;
    })(OpalSpec, null)
    
  })(self)
})();
// lib/opal-spec/scratch_pad.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module;
  return (function(__base){
    function ScratchPad() {};
    ScratchPad = __module(__base, "ScratchPad", ScratchPad);
    var def = ScratchPad.prototype, __scope = ScratchPad._scope;

    ScratchPad.$clear = function() {
      
      return this.record = nil
    };

    ScratchPad.$record = function(arg) {
      
      return this.record = arg
    };

    ScratchPad['$<<'] = function(arg) {
      
      if (this.record == null) this.record = nil;

      return this.record['$<<'](arg)
    };

    ScratchPad.$recorded = function() {
      
      if (this.record == null) this.record = nil;

      return this.record
    };
        ;ScratchPad._sdonate(["$clear", "$record", "$<<", "$recorded"]);
  })(self)
})();
// lib/opal-spec/version.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module;
  return (function(__base){
    function OpalSpec() {};
    OpalSpec = __module(__base, "OpalSpec", OpalSpec);
    var def = OpalSpec.prototype, __scope = OpalSpec._scope;

    __scope.VERSION = "0.2.6"
    
  })(self)
})();
// lib/opal-spec.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice;
  return ;
})();
