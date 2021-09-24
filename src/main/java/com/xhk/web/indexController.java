package com.xhk.web;

import com.xhk.NotFoundException;
import com.xhk.pojo.Blog;
import com.xhk.service.BlogService;
import com.xhk.service.TagService;
import com.xhk.service.TypeService;
import com.xhk.vo.BlogQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class indexController {
    @Autowired
    private TypeService typeService;
    @Autowired
    private BlogService blogService;
    @Autowired
    private TagService tagService;
    @RequestMapping("/")
    public String index(@PageableDefault(size = 2,sort = {"updatedTime"},direction = Sort.Direction.DESC) Pageable pageable,
                         Model model){
        model.addAttribute("page",blogService.listBlog(pageable));
        model.addAttribute("types",typeService.listTypeTop(6));
        model.addAttribute("tags",tagService.listTagTop(10));
        model.addAttribute("recommendBlogs",blogService.listRecommendBlogTop(8));
        return "index";
    }

    @RequestMapping("/blog/{id}")
    public String blog(@PathVariable Long id,Model model){
        model.addAttribute("blog",blogService.getAndConvert(id));

        return "Blog";
    }
    @PostMapping("/search")
    public String search(@PageableDefault(size = 2,sort = {"updatedTime"},direction = Sort.Direction.DESC) Pageable pageable,
                         @RequestParam String query, Model model){
        model.addAttribute("page",blogService.listBlog("%"+query+"%",pageable));
        model.addAttribute("query",query);
        return "search";
    }
    @GetMapping("/footer/newblog")
    public  String newblogs(Model model){
        model.addAttribute("newblogs",blogService.listRecommendBlogTop(3));
        return "_fragments :: newblogList";
    }

}
