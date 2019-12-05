> HTTP API规范建立在《阿里巴巴Java开发手册》的基础之上，请确保熟读手册后再阅读此文档。

### 通用

- 【强制|重要】**不允许使用任何辅助参数！**引入辅助参数会严重增加系统混乱度以及降低代码的可读性，请记住，所有需要辅助参数的实现必然有一个更优的不使用辅助参数的实现将其替代。
- 【强制|重要】**请大量使用卫语句！**卫语句是提升代码可读性的一大杀器，HTTP的接口特别适合使用卫语句，因此在编码时，碰到分支的情况，请第一时间想到使用卫语句。
- 【强制】每一个HTTP接口方法都要有javadoc注释，说明接口的作用，对于特殊参数需要在文档中单独解释，对附加操作也要加以说明。
- 【强制】接口必须遵循单一职责原则，不可以封装过多的数据返回，接口的作用应与接口名称的描述一致。
- 【强制】接口的返回值需要再三斟酌，不可以随意**命名**、**组织结构**，其结构需要符合面向对象的思想。举例：
   一篇博客拥有一个创建者，在组织返回值时，需要将creator作为博客的一个子对象进行组织，而不是将创建者的属性与博客的基本属性同级组织，博客只认识createor，不认识age（age表年龄，是创建者的概念，是creator的基本属性）
- 【推荐】**一表一接口类制：**一个数据库表对应一个接口类，该接口类提供该表下的所有操作。
- 【强制】在一表一接口制的前提下，所有接口的默认参数`id`或`key`表示该接口类对应的表的主键，其它所有的参数都不允许使用此参数名。这么做的好处是，调用者可以在没有文档的情况下快速调用后端接口，如接口调用者想要获取某个用户只要调用接口：`getUser?key=123`就可以将主键为123的用户查出来，而如果按照某个文章的key将用户查询出来，则只能调用`getUser?articleKey=789`，此时不能再使用`key`这个参数，因为我们约定了，一旦调用者调用了用户接口类下的接口，其`key`参数就表示用户主键，这么做就是为了**减少调用者的迷惑**。
- 【推荐】按需组织返回值，HTTP接口的返回值是页面所需要的数据，因此，页面需要哪些数据就返回哪些数据即可，不要返回大量的垃圾数据到前端。
- 【推荐】强烈推荐使用**装饰者模式**构建接口返回值。我们称接口的返回值为VO即展示层对象，通常我们需要将业务层对象转换为展示层对象，在转换时，可以灵活运用装饰者模式，例如：
```
public VO articleVO(Article article){
    VO vo = new VO();
    vo.title = article.title;
    vo.content = article.content;
    return vo;
}
public VO articleWithCreatorVO(Article article){
    VO vo = articleVO(article);
    // 装饰基础article vo
    vo.creator.name = article.creator.name;
    vo.creator.age = article.creator.age;
    return vo;
}
```






###  命名规范
- 所有需要命名的场景（变量、方法、类、文件等）必须再三斟酌，切不可随意命名，优质的命名具有自解释性，这是去除、减少文档的一大杀器。
- 接口命名以简单为准，使用最精简的词汇描述即可，如deleteQuestion、isPlatformManager、getUser，但是要注意的是，如果一个接口明确表明某个参数为必需参数，尽量也要在接口命名中体现出来，如获取某班级下的所有学生可命名为listStudentInClass，接口的命名表明了班级ID是必需参数。
- 【强制】接口的命名遵循**动名词**的形式，如：getStudents、saveUser、updateProfile，不可以使用含糊其辞的命名如：manage、userProfile。
- 【强制】命名在**最短完整描述**的前提下可利用单词缩写进行适当的长度缩减，例如：saveDocument -> saveDoc、changePassword -> changePwd，缩写单词必须是大家所**通识**的缩写，不可以臆想、制造缩写，反例：getActivity -> getAc、updateProfile -> updatePro。
- 【强制】创建接口以create开头如createArticle，更新接口以update开头如updateUser，如果接口同时具备创建与更新功能，则以save开头，如saveGoods。
- 【强制】接口的返回值（注意是HTTP接口的返回值而非Java方法）如果是布尔值，推荐使用以下命名规则：
   1. 表是/否：isCommitted、isFinished、isDone
   2. 表能/不能：canCreateUser、canDeleteResource、canAssignAuth



