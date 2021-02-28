var searchIndex = JSON.parse('{\
"actix_redis":{"doc":"Redis integration for Actix framework.","i":[[4,"SameSite","actix_redis","The <code>SameSite</code> cookie attribute.",null,null],[13,"Strict","","The \\\"Strict\\\" <code>SameSite</code> attribute.",0,null],[13,"Lax","","The \\\"Lax\\\" <code>SameSite</code> attribute.",0,null],[13,"None","","The \\\"None\\\" <code>SameSite</code> attribute.",0,null],[4,"RespError","","",null,null],[13,"Internal","","A non-specific internal error that prevented an operation …",1,null],[13,"IO","","An IO error occurred",1,null],[13,"RESP","","A RESP parsing/serialising error occurred",1,null],[13,"Remote","","A remote error",1,null],[13,"Connection","","Error creating a connection, or an error with a …",1,null],[13,"Unexpected","","An unexpected error.  In this context \\\"unexpected\\\" means …",1,null],[4,"RespValue","","A single RESP value, this owns the data that is …",null,null],[13,"Nil","","",2,null],[13,"Array","","Zero, one or more other <code>RespValue</code>s.",2,null],[13,"BulkString","","A bulk string.  In Redis terminology a string is a …",2,null],[13,"Error","","An error from the Redis server",2,null],[13,"Integer","","Redis documentation defines an integer as being a signed …",2,null],[13,"SimpleString","","",2,null],[3,"Command","","Command for send data to Redis",null,null],[12,"0","","",3,null],[3,"RedisActor","","Redis comminucation actor",null,null],[3,"RedisSession","","Use redis as session storage.",null,null],[4,"Error","","General purpose actix redis error",null,null],[13,"Redis","","",4,null],[13,"NotConnected","","Receiving message during reconnecting",4,null],[13,"Disconnected","","Cancel all waters when connection get dropped",4,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"equivalent","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"equivalent","","",2,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"fmt","","",1,[[["formatter",3]],[["result",4],["error",3]]]],[11,"from","","",2,[[["string",3]],["respvalue",4]]],[11,"from","","",2,[[],["respvalue",4]]],[11,"from","","",2,[[],["respvalue",4]]],[11,"from","","",2,[[],["respvalue",4]]],[11,"from","","",1,[[["error",3]],["error",4]]],[11,"from","","",1,[[["trysenderror",3]],["error",4]]],[11,"from","","",2,[[["vec",3],["global",3]],["respvalue",4]]],[11,"from","","",2,[[["string",3]],["respvalue",4]]],[11,"source","","",1,[[],[["error",8],["option",4]]]],[11,"clone","","",2,[[],["respvalue",4]]],[11,"eq","","",2,[[["respvalue",4]]]],[11,"ne","","",2,[[["respvalue",4]]]],[11,"fmt","","",2,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","","",1,[[["formatter",3]],[["result",4],["error",3]]]],[11,"from_resp_int","","",2,[[["respvalue",4]],[["respvalue",4],["error",4],["result",4]]]],[11,"fmt","","",0,[[["formatter",3]],[["result",4],["error",3]]]],[11,"hash","","",0,[[]]],[11,"clone","","",0,[[],["samesite",4]]],[11,"eq","","",0,[[["samesite",4]]]],[11,"fmt","","",0,[[["formatter",3]],[["result",4],["error",3]]]],[11,"from","","",4,[[["error",4]],["error",4]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"source","","",4,[[],[["error",8],["option",4]]]],[11,"started","","",5,[[["context",3]]]],[11,"restarting","","",5,[[]]],[11,"handle","","",5,[[["command",3]]]],[11,"handle","","",5,[[["resperror",4],["result",4],["respvalue",4]]]],[11,"error","","",5,[[["error",3]],["running",4]]],[11,"new_transform","","",6,[[]]],[11,"is_strict","","Returns <code>true</code> if <code>self</code> is <code>SameSite::Strict</code> and <code>false</code> …",0,[[]]],[11,"is_lax","","Returns <code>true</code> if <code>self</code> is <code>SameSite::Lax</code> and <code>false</code> otherwise.",0,[[]]],[11,"is_none","","Returns <code>true</code> if <code>self</code> is <code>SameSite::None</code> and <code>false</code> …",0,[[]]],[11,"append","","Convenience function for building dynamic Redis commands …",2,[[],["respvalue",4]]],[11,"start","","Start new <code>Supervisor</code> with <code>RedisActor</code>.",5,[[["string",3],["into",8]],[["addr",3],["redisactor",3]]]],[11,"new","","Create new redis session backend",6,[[["string",3],["into",8]],["redissession",3]]],[11,"ttl","","Set time to live in seconds for session value",6,[[]]],[11,"cookie_name","","Set custom cookie name for session id",6,[[]]],[11,"cookie_path","","Set custom cookie path",6,[[]]],[11,"cookie_domain","","Set custom cookie domain",6,[[]]],[11,"cookie_secure","","Set custom cookie secure If the <code>secure</code> field is set, a …",6,[[]]],[11,"cookie_max_age","","Set custom cookie max-age",6,[[["duration",3]]]],[11,"cookie_same_site","","Set custom cookie SameSite",6,[[["samesite",4]]]],[11,"cookie_http_only","","Set custom cookie HttpOnly policy",6,[[]]],[11,"cache_keygen","","Set a custom cache key generation strategy, expecting …",6,[[["box",3],["fn",8]]]]],"p":[[4,"SameSite"],[4,"RespError"],[4,"RespValue"],[3,"Command"],[4,"Error"],[3,"RedisActor"],[3,"RedisSession"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);