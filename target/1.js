// // 加载插件方法
// $.move_img({
//     className: "n1",
//     target_name: "t1",
//     down_mouse_func: function(){
//         console.log("点击了");
//     },
//     callback: function(){
//         console.log("操作完毕");
//     }
// });

// 加载插件方法
$.move_img({
    className: "n3",
    target_name: "t1",
    cursor_class: "cursor_move",
    animation_class: "animationFicker",
    down_mouse_func: function(){
        console.log("点击了");
    },
    callback: function(){
        console.log("操作完毕");
    }
});
