package com.xhk.web.admin;

import com.xhk.pojo.Blog;
import com.xhk.service.BlogService;
import com.xhk.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
public class FileUpLoadController {
    @Autowired
    BlogService blogService;

//    //根据日期 区分上传图片目录
//    SimpleDateFormat sdf=new SimpleDateFormat("/yyyy/MM/dd/");
    @RequestMapping("/upload/{id}")
    public Map<String,Object> FileUpLoad(MultipartFile file, HttpServletRequest request,@PathVariable Long id){
        //存放返回信息
        //根据博客分类生成对应文件夹，并把图片放置到文件夹中。
        String type=blogService.getBlog(id).getType().getName();
        String blogName=blogService.getBlog(id).getTitle();
        Map<String,Object> map=new HashMap<>();
        //获取上传文件的完整文件名
        String originName=file.getOriginalFilename();
        //判断是否是png格式 我这里只写了这一种做测试，想要jpg等其他格式可以在判断中加上
        if (!originName.endsWith(".png")){
            //如果不是png格式
            map.put("status","error");
            map.put("msg","文件类型错误");
            return map;
        }
        //如果是png格式
        //获取当前日期
//        String formatDate=sdf.format(new Date());
        //指定要存放图片的路径，可以根据自己情况来编写
//        String realPath=request.getServletContext().getRealPath("/")+formatDate;
        String realPath="D:\\rentHouse\\"+type+"\\"+blogName; //windows路径格式
//        String realPath="/usr/local/images"+formatDate; //linux路径格式
        File folder=new File(realPath);
        //判断这个路径是否存在
        if (!folder.exists()){
            //不存在就创建该路径
            folder.mkdirs();
        }
        //为上传的图片产生一个随机的新名字
        String newName= UUID.randomUUID().toString()+".png";
        try {
            //保存该图片至你指定的图片路径
            file.transferTo(new File(folder,newName));
            //返回访问该图片的路径信息
//            String url=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+formatDate+newName; //根据上传的路径来
//            String  url="http://image.nginx.com/"+formatDate+newName; 根据域名来
            String  url="http://image.nginx.com/"+type+"/"+blogName+"/"+newName; //根据ip地址来
            Blog b=blogService.getBlog(id);
            b.setFirstPicture(url);
            blogService.updateBlog(id,b);
            map.put("status","success");
            map.put("url",url);
        } catch (IOException e) {
            map.put("status","error");
            map.put("msg","文件类型错误");
            e.printStackTrace();
        }
        return map;
    }
}
