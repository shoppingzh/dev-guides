### 通用
- 每一个HTTP接口方法都要有javadoc注释，说明接口的作用，对于特殊参数需要在文档中单独解释，对附加操作也要加以说明。



###  命名规范
- 接口命名以简单为准，使用最精简的词汇描述即可，如deleteQuestion、isPlatformManager、getUser，但是要注意的是，如果一个接口明确表明某个参数为必需参数，尽量也要在接口命名中体现出来，如获取某班级下的所有学生可命名为listStudentInClass，接口的命名表明了班级ID是必需参数。

- 接口的命名遵循**动名词**的形式，如：getStudents、saveUser、updateProfile，不可以使用含糊其辞的命名如：manage、userProfile。

- 命名在**最短完整描述**的前提下可利用单词缩写进行适当的长度缩减，例如：saveDocument -> saveDoc、changePassword -> changePwd，缩写单词必须是大家所**通识**的缩写，不可以臆想、制造缩写，反例：getActivity -> getAc、updateProfile -> updatePro。

- 创建接口以create开头如createArticle，更新接口以update开头如updateUser，如果接口同时具备创建与更新功能，则以save开头，如saveGoods。

- 接口的返回值（注意是HTTP接口的返回值而非Java方法）如果是布尔值，推荐使用以下命名规则：
   1. 表是/否：isCommitted、isFinished、isDone
   2. 表能/不能：canCreateUser、canDeleteResource、canAssignAuth



