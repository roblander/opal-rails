// lib/opal-jquery/document.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module;
  return (function(__base){
    function Document() {};
    Document = __module(__base, "Document", Document);
    var Document_prototype = Document.prototype, __scope = Document._scope, TMP_1;

    Document['$[]'] = function(selector) {
      
      return $(selector);
    };

    Document.$find = function(selector) {
      
      return this['$[]'](selector)
    };

    Document.$id = function(id) {
      
      
      var el = document.getElementById(id);

      if (!el) {
        return nil;
      }

      return $(el);
    
    };

    Document.$parse = function(str) {
      
      return $(str);
    };

    Document['$ready?'] = TMP_1 = function() {
      var block;
      block = TMP_1._p || nil, TMP_1._p = null;
      
      
      if (block === nil) {
        return nil;
      }

      $(function() {
        block.$call();
      });

      return nil;
    
    };

    Document.$title = function() {
      
      return document.title;
    };

    Document['$title='] = function(title) {
      
      return document.title = title;
    };
        ;Document._sdonate(["$[]", "$find", "$id", "$parse", "$ready?", "$title", "$title="]);
  })(self)
})();
// lib/opal-jquery/element.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
  return (function(__base, __super){
    function Element() {};
    Element = __klass(__base, __super, "Element", Element);

    ;Element._sdonate(["$find", "$id", "$new", "$parse"]);    var Element_prototype = Element.prototype, __scope = Element._scope, TMP_1, TMP_2, TMP_4, TMP_6;

    Element.$find = function(selector) {
      
      return $(selector);
    };

    Element.$id = function(id) {
      
      return __scope.Document.$id(id)
    };

    Element.$new = function(tag) {
      if (tag == null) {
        tag = "div"
      }
      return $(document.createElement(tag));
    };

    Element.$parse = function(str) {
      
      return $(str);
    };

    Element_prototype['$[]'] = function(name) {
      
      return this.attr(name) || "";
    };

    Element_prototype['$[]='] = Element_prototype.attr;

    Element_prototype['$<<'] = Element_prototype.append;

    Element_prototype.$add_class = Element_prototype.addClass;

    Element_prototype.$after = Element_prototype.after;

    Element_prototype.$append = Element_prototype['$<<'];

    Element_prototype.$append_to = Element_prototype.appendTo;

    Element_prototype.$append_to_body = function() {
      
      return this.appendTo(document.body);
    };

    Element_prototype.$append_to_head = function() {
      
      return this.appendTo(document.head);
    };

    Element_prototype.$at = function(index) {
      
      
      var length = this.length;

      if (index < 0) {
        index += length;
      }

      if (index < 0 || index >= length) {
        return nil;
      }

      return $(this[index]);
    
    };

    Element_prototype.$before = Element_prototype.before;

    Element_prototype.$children = Element_prototype.children;

    Element_prototype.$class_name = function() {
      
      
      var first = this[0];

      if (!first) {
        return "";
      }

      return first.className || "";
    
    };

    Element_prototype['$class_name='] = function(name) {
      
      
      for (var i = 0, length = this.length; i < length; i++) {
        this[i].className = name;
      }
    
      return this;
    };

    Element_prototype.$css = function(name, value) {
      var _a, _b;if (value == null) {
        value = nil
      }
      if ((_a = (_b = value['$nil?'](), _b !== false && _b !== nil ? name['$is_a?'](__scope.String) : _b)) !== false && _a !== nil) {
        return $(this).css(name)
        } else {
        if ((_a = name['$is_a?'](__scope.Hash)) !== false && _a !== nil) {
          $(this).css(name.$to_native());
          } else {
          $(this).css(name, value);
        }
      };
      return this;
    };

    Element_prototype.$animate = TMP_1 = function(params) {
      var speed = nil, _a, block;
      block = TMP_1._p || nil, TMP_1._p = null;
      
      speed = (function() { if ((_a = params['$has_key?']("speed")) !== false && _a !== nil) {
        return params.$delete("speed")
        } else {
        return 400
      }; return nil; }).call(this);
      
      $(this).animate(params.$to_native(), speed, function() {
        if ((block !== nil)) {
        block.$call()
      }
      })
    ;
    };

    Element_prototype.$each = TMP_2 = function() {
      var __yield;
      __yield = TMP_2._p || nil, TMP_2._p = null;
      
      for (var i = 0, length = this.length; i < length; i++) {
      if (__yield($(this[i])) === __breaker) return __breaker.$v;
      };
      return this;
    };

    Element_prototype.$map = TMP_4 = function() {
      var list = nil, TMP_3, _a, __yield;
      __yield = TMP_4._p || nil, TMP_4._p = null;
      
      list = [];
      (_a = this, _a.$each._p = (TMP_3 = function(el) {

        var self = TMP_3._s || this, _a;
        if (el == null) el = nil;

        return list['$<<']((((_a = __yield(el)) === __breaker) ? __breaker.$v : _a))
      }, TMP_3._s = this, TMP_3), _a.$each());
      return list;
    };

    Element_prototype.$to_a = function() {
      var TMP_5, _a;
      return (_a = this, _a.$map._p = (TMP_5 = function(el) {

        var self = TMP_5._s || this;
        if (el == null) el = nil;

        return el
      }, TMP_5._s = this, TMP_5), _a.$map());
    };

    Element_prototype.$find = Element_prototype.find;

    Element_prototype.$first = function() {
      
      return this.length ? this.first() : nil;
    };

    Element_prototype.$focus = Element_prototype.focus;

    Element_prototype['$has_class?'] = Element_prototype.hasClass;

    Element_prototype.$html = function() {
      
      return this.html() || "";
    };

    Element_prototype['$html='] = Element_prototype.html;

    Element_prototype.$id = function() {
      
      
      var first = this[0];

      if (!first) {
        return "";
      }

      return first.id || "";
    
    };

    Element_prototype['$id='] = function(id) {
      
      
      var first = this[0];

      if (first) {
        first.id = id;
      }

      return this;
    
    };

    Element_prototype.$inspect = function() {
      
      
      var val, el, str, result = [];

      for (var i = 0, length = this.length; i < length; i++) {
        el  = this[i];
        str = "<" + el.tagName.toLowerCase();

        if (val = el.id) str += (' id="' + val + '"');
        if (val = el.className) str += (' class="' + val + '"');

        result.push(str + '>');
      }

      return '[' + result.join(', ') + ']';
    
    };

    Element_prototype.$length = function() {
      
      return this.length;
    };

    Element_prototype.$next = Element_prototype.next;

    Element_prototype.$siblings = Element_prototype.siblings;

    Element_prototype.$off = function(event_name, selector, handler) {
      if (handler == null) {
        handler = nil
      }
      
      if (handler === nil) {
        handler = selector;
        this.off(event_name, handler._jq);
      }
      else {
        this.off(event_name, selector, handler._jq);
      }
    
      return handler;
    };

    Element_prototype.$on = TMP_6 = function(event_name, selector) {
      var block;
      block = TMP_6._p || nil, TMP_6._p = null;
      if (selector == null) {
        selector = nil
      }
      if (block === nil) {
        return nil
      };
      
      var handler = function(arg1, arg2, arg3, arg4) {
        return block.$call(arg1, arg2, arg3, arg4)
      };
      block._jq = handler;

      if (selector === nil) {
        this.on(event_name, handler);
      }
      else {
        this.on(event_name, selector, handler);
      }
    
      return block;
    };

    Element_prototype.$parent = Element_prototype.parent;

    Element_prototype.$prev = Element_prototype.prev;

    Element_prototype.$remove = Element_prototype.remove;

    Element_prototype.$remove_class = Element_prototype.removeClass;

    Element_prototype.$size = Element_prototype.$length;

    Element_prototype.$succ = Element_prototype.$next;

    Element_prototype['$text='] = Element_prototype.text;

    Element_prototype.$toggle_class = Element_prototype.toggleClass;

    Element_prototype.$trigger = Element_prototype.trigger;

    Element_prototype.$value = function() {
      
      return this.val() || "";
    };

    Element_prototype['$value='] = Element_prototype.val;

    Element_prototype.$hide = Element_prototype.hide;

    Element_prototype.$show = Element_prototype.show;

    return Element_prototype.$toggle = Element_prototype.toggle;
  })(self, jQuery)
})();
// lib/opal-jquery/event.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
  return (function(__base, __super){
    function Event() {};
    Event = __klass(__base, __super, "Event", Event);

    var Event_prototype = Event.prototype, __scope = Event._scope;

    Event_prototype.$current_target = function() {
      
      return $(this.currentTarget);
    };

    Event_prototype['$default_prevented?'] = Event_prototype.isDefaultPrevented;

    Event_prototype.$prevent_default = Event_prototype.preventDefault;

    Event_prototype.$page_x = function() {
      
      return this.pageX;
    };

    Event_prototype.$page_y = function() {
      
      return this.pageY;
    };

    Event_prototype['$propagation_stopped?'] = Event_prototype.propagationStopped;

    Event_prototype.$stop_propagation = Event_prototype.stopPropagation;

    Event_prototype.$target = function() {
      
      
      if (this._opalTarget) {
        return this._opalTarget;
      }

      return this._opalTarget = $(this.target);
    
    };

    Event_prototype.$type = function() {
      
      return this.type;
    };

    Event_prototype.$which = function() {
      
      return this.which;
    };

    return nil;
  })(self, $.Event)
})();
// lib/opal-jquery/http.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass, __hash2 = __opal.hash2;
  return (function(__base, __super){
    function HTTP() {};
    HTTP = __klass(__base, __super, "HTTP", HTTP);

    ;HTTP._sdonate(["$get", "$post"]);    var HTTP_prototype = HTTP.prototype, __scope = HTTP._scope, TMP_1, TMP_2, TMP_3, TMP_4;
    HTTP_prototype.body = HTTP_prototype.error_message = HTTP_prototype.method = HTTP_prototype.status_code = HTTP_prototype.url = HTTP_prototype.errback = HTTP_prototype.json = HTTP_prototype.ok = HTTP_prototype.settings = HTTP_prototype.callback = nil;

    HTTP_prototype.$body = function() {
      
      return this.body
    }, nil;

    HTTP_prototype.$error_message = function() {
      
      return this.error_message
    }, nil;

    HTTP_prototype.$method = function() {
      
      return this.method
    }, nil;

    HTTP_prototype.$status_code = function() {
      
      return this.status_code
    }, nil;

    HTTP_prototype.$url = function() {
      
      return this.url
    }, nil;

    HTTP.$get = TMP_1 = function(url, opts) {
      var block;
      block = TMP_1._p || nil, TMP_1._p = null;
      if (opts == null) {
        opts = __hash2({})
      }
      return this.$new(url, "GET", opts, block)['$send!']()
    };

    HTTP.$post = TMP_2 = function(url, opts) {
      var block;
      block = TMP_2._p || nil, TMP_2._p = null;
      if (opts == null) {
        opts = __hash2({})
      }
      return this.$new(url, "POST", opts, block)['$send!']()
    };

    HTTP_prototype.$initialize = function(url, method, options, handler) {
      var http = nil, settings = nil;if (handler == null) {
        handler = nil
      }
      this.url = url;
      this.method = method;
      this.ok = true;
      http = this;
      settings = options.$to_native();
      if (handler !== false && handler !== nil) {
        this.callback = this.errback = handler
      };
      
      settings.data = settings.payload;
      settings.url  = url;
      settings.type = method;

      settings.success = function(str) {
        http.body = str;

        if (typeof(str) === 'object') {
          http.json = __scope.JSON.$from_object(str);
        }

        return http.$succeed();
      };

      settings.error = function(xhr, str) {
        return http.$fail();
      };
    
      return this.settings = settings;
    };

    HTTP_prototype.$callback = TMP_3 = function() {
      var block;
      block = TMP_3._p || nil, TMP_3._p = null;
      
      this.callback = block;
      return this;
    };

    HTTP_prototype.$errback = TMP_4 = function() {
      var block;
      block = TMP_4._p || nil, TMP_4._p = null;
      
      this.errback = block;
      return this;
    };

    HTTP_prototype.$fail = function() {
      var _a;
      this.ok = false;
      if ((_a = this.errback) !== false && _a !== nil) {
        return this.errback.$call(this)
        } else {
        return nil
      };
    };

    HTTP_prototype.$json = function() {
      var _a;
      return ((_a = this.json), _a !== false && _a !== nil ? _a : __scope.JSON.$parse(this.body));
    };

    HTTP_prototype['$ok?'] = function() {
      
      return this.ok;
    };

    HTTP_prototype['$send!'] = function() {
      
      $.ajax(this.settings);
      return this;
    };

    HTTP_prototype.$succeed = function() {
      var _a;
      if ((_a = this.callback) !== false && _a !== nil) {
        return this.callback.$call(this)
        } else {
        return nil
      };
    };

    return nil;
  })(self, null)
})();
// lib/opal-jquery/kernel.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module;
  return (function(__base){
    function Kernel() {};
    Kernel = __module(__base, "Kernel", Kernel);
    var Kernel_prototype = Kernel.prototype, __scope = Kernel._scope;

    Kernel_prototype.$alert = function(msg) {
      
      alert(msg);
      return nil;
    }
        ;Kernel._donate(["$alert"]);
  })(self)
})();
// lib/opal-jquery/local_storage.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module;
  return (function(__base){
    function LocalStorage() {};
    LocalStorage = __module(__base, "LocalStorage", LocalStorage);
    var LocalStorage_prototype = LocalStorage.prototype, __scope = LocalStorage._scope;

    LocalStorage['$[]'] = function(key) {
      
      
      var val = localStorage.getItem(key);
      return val === null ? nil : val;
    
    };

    LocalStorage['$[]='] = function(key, value) {
      
      return localStorage.setItem(key, value);
    };

    LocalStorage.$clear = function() {
      
      localStorage.clear();
      return this;
    };

    LocalStorage.$delete = function(key) {
      
      
      var val = localStorage.getItem(key);
      localStorage.removeItem(key);
      return val === null ? nil : val;
    
    };
        ;LocalStorage._sdonate(["$[]", "$[]=", "$clear", "$delete"]);
  })(self)
})();
// lib/opal-jquery.rb
(function() {
  var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice;
  return ;
})();
