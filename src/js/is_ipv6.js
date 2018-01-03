
const check = ip => {

    return false;

};





const is_quad_ex = ip => {

    if (!(typeof(ip) === 'string')) { return { result: false, reason: 'All quads are strings' }; }


    return true;

}





const is_quad = ip => is_quad_ex(ip).result;





export {

//    is_simple,
    is_quad,
      is_quad_ex,
    is_incomplete_quad,
      is_incomplete_quad_ex,
 //    is_integer,

 //    is_complex,  // has port or subnet mask
 //    is_complex_quad,
 //    is_complex_integer,

 //    as_quad,
 //    as_integer,

 //    is_range,
 //    is_current_network,

 //    is_special,
 //    is_loopback,
 //    is_link_local,
 //    is_ietf_protocol,
 //    is_ipv6_to_ipv4_relay,
 //    is_benchmark,

 //    is_testnet,
 //      is_testnet_1,
 //      is_testnet_2,
 //      is_testnet_3,

 //    is_private,
 //      is_private_10,
 //      is_private_172,
 //      is_private_192,

 //    is_shared,
 //    is_link,
 //    is_multicast,
 //    is_broadcast,
 //    is_subnet,
 //    is_subnet_broadcast,
 //    is_reserved,

 //    check

};
