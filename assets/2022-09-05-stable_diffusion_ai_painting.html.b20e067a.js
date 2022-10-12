import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as d,a as e,b as o,d as t,e as n,r}from"./app.e4f0c89b.js";const c={},h=e("p",null,"\u6211\u4ECE\u5C0F\u7279\u522B\u7FA1\u6155\u4F1A\u753B\u753B\u7684\u4F19\u4F34\uFF0C\u4ED6\u4EEC\u80FD\u7ED8\u51FA\u5FC3\u4E2D\u6240\u60F3\uFF0C\u800C\u672C\u4EBA\u6C34\u5E73\u6700\u9AD8\u7684\u8096\u50CF\u753B\u662F\u4E01\u8001\u5934\u3002\u63A5\u89E6 Stable Diffusion \u540E\uFF0C\u6211\u8131\u80CE\u6362\u9AA8\uFF0C\u7ED9\u81EA\u5DF1\u8D34\u4E0A\u4E86\u300C\u4F1A\u753B\u753B\u300D\u7684\u65B0\u6807\u7B7E\u3002",-1),p=e("p",null,[e("img",{src:"http://tc.seoipo.com/2022-09-04-11-53-20.png",alt:"",title:"\u4E01\u8001\u5934\u8FDB\u5316\u65C5\u7A0B",loading:"lazy"})],-1),f=e("p",null,[o("Stable Diffusion \u662F\u4E00\u4E2A\u300C\u6587\u672C\u5230\u56FE\u50CF\u300D\u7684\u4EBA\u5DE5\u667A\u80FD\u6A21\u578B\uFF0C\u4E5F\u662F\u552F\u4E00\u4E00\u6B3E\u5F00\u6E90\u4E14\u80FD\u90E8\u7F72\u5728\u5BB6\u7528\u7535\u8111\uFF08\u5BF9\u786C\u4EF6\u8981\u6C42\u4E0D\u9AD8\uFF09\u4E0A\u7684 AI \u7ED8\u56FE\u5DE5\u5177\uFF0C"),e("strong",null,"\u53EF\u4EE5\u5728 6GB \u663E\u5B58\u663E\u5361\u6216\u65E0\u663E\u5361\uFF08\u53EA\u4F9D\u8D56 CPU\uFF09\u4E0B\u8FD0\u884C"),o("\uFF0C\u5E76\u5728\u51E0\u79D2\u5185\u751F\u6210\u56FE\u50CF\uFF0C\u65E0\u9700\u9884\u5904\u7406\u548C\u540E\u5904\u7406\u3002")],-1),u={href:"https://huggingface.co/spaces/stabilityai/stable-diffusion",target:"_blank",rel:"noopener noreferrer"},b={href:"https://beta.dreamstudio.ai/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://wenxin.baidu.com/moduleApi/ernieVilg",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/invoke-ai/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md#doesnt-work-anymore",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,"M1/M2 Mac",-1),w={href:"https://www.charl-e.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://sspai.com/post/75682",target:"_blank",rel:"noopener noreferrer"},D=n('<p><img src="http://tc.seoipo.com/2022-09-05-16-22-45.png" alt="" title="Stable Diffusion \u90E8\u7F72\u6D41\u7A0B" loading="lazy"></p><p>\u672C\u6587\u4EE5 Windows \u5E73\u53F0\u4E3A\u4F8B\uFF0C\u4E0B\u9762\u4F1A\u4F9D\u6B21\u4ECB\u7ECD\u73AF\u5883\u914D\u7F6E\uFF0CStable Diffusion \u5B89\u88C5\u548C\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u3002</p><h2 id="docker-\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#docker-\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> Docker \u73AF\u5883\u914D\u7F6E</h2><p>\u672C\u65B9\u6848\u57FA\u4E8E Docker \u914D\u7F6E\uFF0C\u800C Docker \u5B9E\u8D28\u4E0A\u662F\u5728\u5DF2\u7ECF\u8FD0\u884C\u7684 Linux \u4E0B\u5236\u9020\u4E86\u4E00\u4E2A\u9694\u79BB\u7684\u6587\u4EF6\u73AF\u5883\uFF0C\u5B83\u5FC5\u987B\u90E8\u7F72\u5728 Linux \u5185\u6838\u7684\u7CFB\u7EDF\u4E0A\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> \u56E0\u6B64\uFF0CMac \u4E0D\u7528\u7279\u522B\u914D\u7F6E\uFF0C\u800C Windows \u7CFB\u7EDF\u60F3\u90E8\u7F72 Docker \u5C31\u5FC5\u987B\u9700\u8981\u5B89\u88C5\u4E00\u4E2A\u865A\u62DF Linux \u73AF\u5883\uFF0C<strong>\u914D\u7F6E WSL \u6216\u662F\u542F\u7528 Hyper-V</strong>\u3002\u4E0B\u9762\u6211\u4F1A\u4ECB\u7ECD\u5404\u81EA\u7684\u542F\u7528\u65B9\u5F0F\uFF0C<strong>\u4E8C\u9009\u4E00\u5373\u53EF</strong>\uFF0C\u63A8\u8350\u4F7F\u7528\u5B50\u7CFB\u7EDF WSL\uFF08\u5360\u7528\u7CFB\u7EDF\u76D8 30G \u7684\u7A7A\u95F4\uFF09\u3002</p><h3 id="\u5B89\u88C5-wsl" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-wsl" aria-hidden="true">#</a> \u5B89\u88C5 WSL</h3><p>\u5728\u7BA1\u7406\u5458 PowerShell \u8F93\u5165\u547D\u4EE4 <code>wsl --install</code>\uFF0C\u4E4B\u540E\u7EC8\u7AEF\u4F1A\u9ED8\u8BA4\u5B89\u88C5 Ubuntu\u3002\u7CFB\u7EDF\u4E0B\u8F7D\u65F6\u95F4\u8F83\u957F\uFF0C\u6CE8\u610F\u522B\u5173\u673A\u3002<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> \u5B89\u88C5 Ubuntu \u5B8C\u6210\u540E\uFF0C\u6309\u63D0\u793A\u8BBE\u7F6E Ubuntu \u8D26\u6237\u548C\u5BC6\u7801\u3002</p><h3 id="\u542F\u7528-hyper-v" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528-hyper-v" aria-hidden="true">#</a> \u542F\u7528 Hyper-V</h3><p>\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u6253\u5F00 PowerShell \u63A7\u5236\u53F0\uFF0C\u8F93\u5165\u547D\u4EE4 <code>Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All</code>\u3002<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> \u91CD\u542F\u7535\u8111\u540E\uFF0C\u5C06\u5F00\u542F Hyper-V\u3002</p><h2 id="\u914D\u7F6E-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-stable-diffusion" aria-hidden="true">#</a> \u914D\u7F6E Stable Diffusion</h2>',9),v={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[e("img",{src:"http://tc.seoipo.com/2022-09-04-17-06-27.png",alt:"",title:"Docker Desktop \u754C\u9762",loading:"lazy"})],-1),y={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker/releases/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.aliyundrive.com/s/EKmK7MGrHdn",target:"_blank",rel:"noopener noreferrer"},I=e("h3",{id:"\u9009\u62E9\u5206\u652F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9009\u62E9\u5206\u652F","aria-hidden":"true"},"#"),o(" \u9009\u62E9\u5206\u652F")],-1),L=e("p",null,[o("\u76EE\u524D Stable Diffusion \u6709 hlky\u3001auto\u3001auto-cpu \u548C lstein \u56DB\u4E2A\u5206\u652F\u3002\u5982\u679C\u8981\u66F4\u6362\u5206\u652F\uFF0C\u5219\u66F4\u6539\u955C\u50CF\u6784\u5EFA\u547D\u4EE4 "),e("code",null,"docker compose --profile [ui] up --build"),o("\uFF0C\u5C06 "),e("code",null,"[ui]"),o(" \u66FF\u6362\u4E3A\u6240\u9700\u7684\u955C\u50CF\u540D\u5373\u53EF\u3002")],-1),B=e("li",null,[e("strong",null,"hlky"),o("\uFF08\u63A8\u8350\uFF09\uFF1A\u754C\u9762\u76F4\u89C2\uFF0C\u6700\u9AD8\u5206\u8FA8\u7387\u4E3A 1024x1024\uFF0C\u662F\u6700\u53D7\u6B22\u8FCE\u7684\u4E3B\u9898\uFF0C\u955C\u50CF\u6784\u5EFA\u547D\u4EE4\u4E3A "),e("code",null,"docker compose --profile hlky up --build"),o("\u3002")],-1),G=e("li",null,[e("strong",null,"auto"),o("\uFF1A\u8BBE\u7F6E\u6A21\u5757\u6700\u4E30\u5BCC\uFF0C\u663E\u793A\u7ED8\u753B\u8FC7\u7A0B\uFF0C\u652F\u6301\u968F\u673A\u63D2\u5165\u827A\u672F\u5BB6\u3001\u53C2\u6570\u8BFB\u53D6\u548C\u5426\u5B9A\u63CF\u8FF0\uFF0C\u6700\u9AD8\u5206\u8FA8\u7387\u4E3A 2048x2048\uFF08\u9AD8\u5206\u8FA8\u7387\u5BF9\u663E\u5B58\u8981\u6C42\u66F4\u9AD8\uFF09\uFF0C\u955C\u50CF\u6784\u5EFA\u547D\u4EE4\u4E3A "),e("code",null,"docker compose --profile auto up --build"),o("\u3002")],-1),R=e("strong",null,"auto-cpu",-1),W=e("code",null,"docker compose --profile auto-cpu up --build",-1),E={href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs#running-inside-docker",target:"_blank",rel:"noopener noreferrer"},P=e("li",null,[e("strong",null,"lstein"),o("\uFF1Acli \u7AEF\u975E\u5E38\u6210\u719F\uFF0CWebUI \u7AEF\u53C2\u6570\u8F83\u5C11\uFF0C\u80FD\u81EA\u52A8\u8BFB\u53D6\u56FE\u7247\u8BB0\u5F55\uFF0C\u9002\u5408\u65E0\u8FDB\u9636\u9700\u6C42\u7684\u65B0\u624B\u548C Mac \u7528\u6237\u4F7F\u7528\uFF0C\u955C\u50CF\u6784\u5EFA\u547D\u4EE4\u4E3A "),e("code",null,"docker compose --profile lstein up --build"),o("\u3002")],-1),M=n(`<h3 id="\u51C6\u5907-linux-\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907-linux-\u8DEF\u5F84" aria-hidden="true">#</a> \u51C6\u5907 Linux \u8DEF\u5F84</h3><p>\u914D\u7F6E Stable Diffusion WebUI Docker \u540E\uFF0C\u8FDB\u5165 Linux \u73AF\u5883\u542F\u52A8 Docker \u5BB9\u5668\u3002\u4E0D\u8FC7\u5728\u542F\u52A8 Docker \u524D\uFF0C\u6211\u4EEC\u9700\u62E5\u6709 Stable Diffusion \u7684 Linux/Mac \u8DEF\u5F84\u3002</p><p>Windows \u672C\u5730\u78C1\u76D8\u6302\u8F7D\u5728 Linux \u7684 mnt \u76EE\u5F55\u4E0B\uFF0C\u56E0\u6B64 Windows \u7684 Linux \u8DEF\u5F84\u9700\u5148\u6DFB\u52A0 <code>/mnt/</code> \u524D\u7F00\uFF0C\u7136\u540E\u628A\u78C1\u76D8\u7B26\u53F7\u6539\u4E3A\u5C0F\u5199\uFF0C\u5E76\u5C06\u53CD\u659C\u625B <code>\\</code> \u66FF\u6362\u4E3A <code>/</code>\u3002\u5047\u8BBE\u5BB9\u5668\u4F4D\u4E8E\u300CD:\\Backup\\Libraries\\Desktop\\stable-diffusion-webui-docker\u300D\uFF0C\u8F6C\u6362\u4E3A Linux \u8DEF\u5F84\u5219\u662F\u300C/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker\u300D\u3002\uFF08Mac \u53EF\u5FFD\u7565\u672C\u6BB5\uFF0C\u76F4\u63A5\u4F7F\u7528\u81EA\u8EAB\u8DEF\u5F84\u3002\uFF09</p><h2 id="\u542F\u52A8-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-stable-diffusion" aria-hidden="true">#</a> \u542F\u52A8 Stable Diffusion</h2><p>\u51C6\u5907\u597D Linux \u8DEF\u5F84\u540E\uFF0C\u542F\u52A8 Docker Desktop\uFF0C\u6253\u5F00 WSL\uFF08Ubuntu\uFF09\u6216 Mac \u7EC8\u7AEF\u8F93\u5165\u5207\u6362\u8DEF\u5F84\u547D\u4EE4 <code>cd /mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker</code>\uFF0C\u8FDB\u5165 Stable Diffusion WebUI Docker \u89E3\u538B\u6587\u4EF6\u76EE\u5F55\u6267\u884C\u90E8\u7F72\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u81EA\u52A8\u4E0B\u8F7D\u91C7\u6837\u6A21\u578B\u548C\u4F9D\u8D56\u5305</span>
<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> download up <span class="token parameter variable">--build</span>
<span class="token comment"># \u4E0A\u65B9\u547D\u4EE4\u9700\u8981 20 \u5206\u949F\u6216\u66F4\u957F\uFF0C\u5B8C\u6210\u540E\u6267\u884C\u955C\u50CF\u6784\u5EFA\u547D\u4EE4</span>
<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> hlky up <span class="token parameter variable">--build</span>
<span class="token comment"># hlky \u662F\u63A8\u8350\u5206\u652F\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9 auto | auto-cpu | lstein</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u63D0\u793A\u8BBF\u95EE <code>http://localhost:7860/</code>\uFF0C\u4F60\u5C31\u53EF\u4EE5\u5728\u672C\u5730 AI \u751F\u6210\u56FE\u7247\u4E86\u3002<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><p><img src="http://tc.seoipo.com/2022-09-04-18-32-31.png" alt="" loading="lazy"></p>`,8),N={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker/releases/",target:"_blank",rel:"noopener noreferrer"},F=n('<h2 id="\u754C\u9762\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u754C\u9762\u8BF4\u660E" aria-hidden="true">#</a> \u754C\u9762\u8BF4\u660E</h2><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4F1A\u4ECB\u7ECD\u6700\u6D41\u884C\u7684 hlky \u754C\u9762\uFF0C\u5176\u4ED6\u5206\u652F\u7684\u4E3B\u9898\u754C\u9762\u7565\u6709\u4E0D\u540C\uFF0C\u4F46\u529F\u80FD\u5E76\u6CA1\u6709\u5927\u7684\u53D8\u5316\uFF0C\u5982\u4F55\u66F4\u6362\u5206\u652F\u770B\u4E0B\u65B9\u7684\u5E38\u89C1\u95EE\u9898\u3002</p><h3 id="text-to-image" tabindex="-1"><a class="header-anchor" href="#text-to-image" aria-hidden="true">#</a> Text-to-Image</h3><p>Text-to-Image \u662F Stable Diffusion \u4F9D\u636E\u6587\u5B57\u63CF\u8FF0\u6765\u751F\u6210\u56FE\u50CF\u3002\u98CE\u666F\u3001\u521B\u610F\u753B\u7B49\u5D07\u5C1A\u7A7A\u95F4\u7ED3\u6784\u7684\u753B\u4F5C\u7C7B\u578B\u65F6\uFF0C\u4F18\u5148\u63A8\u8350\u7AD6\u56FE\u6216\u8005\u6A2A\u56FE\u3002\u4EBA\u50CF\u7C7B\u753B\u4F5C\u63A8\u8350 1:1 \u7684\u65B9\u56FE\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E24\u4E2A\u6216\u8005\u591A\u4E2A\u4EBA\u8138\u7684\u53E0\u52A0\u73B0\u8C61\u3002\u751F\u6210\u56FE\u7247\u7684\u5206\u8FA8\u7387\u662F\u6709\u9650\u5236\u7684\uFF0C\u53EF\u4EE5\u7528 Upscale \u653E\u5927\u7ED3\u679C\u56FE\u7247\u3002</p><p><img src="http://tc.seoipo.com/2022-09-05-08-28-23.png" alt="" title="Text-to-Image \u754C\u9762" loading="lazy"></p><p>\u9ED8\u8BA4\u4F7F\u7528 Simple \u7B80\u5355\u6A21\u5F0F\uFF0C\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE Advanced\uFF0C\u53EF\u67E5\u770B\u8FDB\u9636\u9009\u9879\uFF0C\u4F7F\u7528\u8FDB\u9636\u7684\u573A\u666F\u77E9\u9635\u3001\u9762\u5B54\u4FEE\u590D\u548C\u5206\u8FA8\u7387\u653E\u5927\u7B49\u591A\u79CD\u529F\u80FD\u3002</p><h3 id="image-to-image" tabindex="-1"><a class="header-anchor" href="#image-to-image" aria-hidden="true">#</a> Image-to-Image</h3><p>Image-to-Image \u4F9D\u636E\u6587\u5B57\u63CF\u8FF0\u548C\u8F93\u5165\u6E90\u56FE\uFF0C\u751F\u6210\u76F8\u5173\u7684\u56FE\u50CF\u3002\u8BE5\u6A21\u5F0F\u82E5\u4EE5\u7D20\u63CF\u3001\u7ED3\u6784\u753B\u4E3A\u6765\u6E90\u56FE\uFF0C\u53EF\u5145\u5206\u586B\u5145\u56FE\u50CF\u7EC6\u8282\uFF1B\u82E5\u4EE5\u7EC6\u8282\u5145\u5206\u7684\u7167\u7247\u4E3A\u6765\u6E90\u56FE\uFF0C\u5219\u4F1A\u8F93\u51FA\u5DEE\u5F02\u8F83\u5927\u7684\u7ED3\u679C\u3002</p><p><img src="http://tc.seoipo.com/2022-09-04-15-39-00.png" alt="" title="Image-to-Image \u754C\u9762" loading="lazy"></p><p>Denoising Strength \u6307\u4E0E\u539F\u56FE\u7684\u5DEE\u5F02\u5EA6\uFF0C\u5EFA\u8BAE\u5728 0.75-0.9\uFF0C\u9B54\u6539\u56FE\u7247\u53EF\u4EE5\u8BBE\u4E3A 0.5 \u4EE5\u4E0B\u3002\u4E0B\u56FE\u4E2D\u7684 Denoising Strength \u53EA\u6709 0.44\uFF0C\u6574\u4F53\u56FE\u7247\u7ED3\u6784\u4E0E\u8981\u7D20\u6CA1\u53D8\uFF0C\u4F46\u7ED3\u679C\u5982\u4F55\u4F60\u770B\u5230\u4E86\u3002</p><p><img src="http://tc.seoipo.com/2022-09-04-15-40-26.png" alt="" title="\u8D85\u7EA7\u9B54\u6539\u56FE\u7247" loading="lazy"></p><h3 id="image-lab" tabindex="-1"><a class="header-anchor" href="#image-lab" aria-hidden="true">#</a> Image Lab</h3><p>Image Lab \u80FD\u6279\u91CF\u4FEE\u6B63\u9762\u5B54\u548C\u653E\u5927\u56FE\u7247\u5206\u8FA8\u7387\u3002</p><p>Fix Faces \u662F\u901A\u8FC7 GFPGAN \u6A21\u578B\u6765\u6539\u5584\u56FE\u7247\u4E2D\u7684\u9762\u5B54\uFF0CEffect strength \u6ED1\u5757\u53EF\u4EE5\u63A7\u5236\u6548\u679C\u7684\u5F3A\u5EA6\u3002\u4F46\u5B9E\u9645\u6548\u679C\u522B\u62A5\u592A\u9AD8\u671F\u8BB8\uFF0C\u4E0B\u56FE\u53F3\u4FA7\u5F00\u542F\u4E86 Fix Faces\uFF0C\u53EA\u80FD\u8BF4\u52C9\u5F3A\u6709\u4E86\u4E94\u5B98\u3002</p><p><img src="http://tc.seoipo.com/2022-09-04-15-47-14.png" alt="" title="A woman flying in the air laughing" loading="lazy"></p><p>Upscale \u653E\u5927\u5206\u8FA8\u7387\u529F\u80FD\u6709 RealESRGAN\uFF0CGoBIG\uFF0CLatent Diffusion Super Resolution \u548C GoLatent \u56DB\u79CD\u6A21\u578B\uFF0C\u5176\u4E2D\u7684 RealESRGAN \u6709\u666E\u901A\u4E0E\u5361\u901A\u4E24\u79CD\u6A21\u5F0F\uFF0C\u53EF\u6309\u9700\u9009\u62E9\u3002Upscale \u56FE\u7247\u4E3B\u8981\u6D88\u8017 CPU \u4E0E\u5185\u5B58\u8D44\u6E90\u3002</p><h2 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> \u4F7F\u7528\u8BF4\u660E</h2><h3 id="\u6587\u5B57\u63CF\u8FF0\u56FE\u50CF" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57\u63CF\u8FF0\u56FE\u50CF" aria-hidden="true">#</a> \u6587\u5B57\u63CF\u8FF0\u56FE\u50CF</h3><p>Stable Diffusion \u7684\u6838\u5FC3\u529F\u80FD\u662F\u4EE5\u6587\u5B57\u5185\u5BB9 (\u82F1\u6587) \u63CF\u7ED8\u4E00\u4E2A\u573A\u666F\u6216\u4E8B\u7269\uFF0C\u4ECE\u800C\u51B3\u5B9A\u4F60\u7684\u753B\u9762\u4E2D\u5C06\u51FA\u73B0\u4EC0\u4E48\u3002\u56E0\u6B64\uFF0C\u6587\u5B57\u63CF\u7ED8\u662F\u51B3\u5B9A\u56FE\u50CF\u751F\u6210\u8D28\u91CF\u7684\u5173\u952E\u56E0\u7D20\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4F1A\u4EE5\u5B98\u65B9\u6587\u6863\u6848\u4F8B\u4E3A\u4F8B\uFF0C\u89E3\u6784\u63CF\u8FF0\u6587\u5B57\u7684\u8981\u7D20\u548C\u6807\u51C6\u3002<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></p><p>\u6837\u4F8B\uFF1A<code>A beautiful painting {\u753B\u4F5C\u79CD\u7C7B} of a singular lighthouse, shining its light across a tumultuous sea of blood {\u753B\u9762\u63CF\u8FF0} by greg rutkowski and thomas kinkade {\u753B\u5BB6/\u753B\u98CE}, Trending on artstation {\u53C2\u8003\u5E73\u53F0}, yellow color scheme {\u914D\u8272}</code>\u3002</p><ul><li><strong>\u753B\u4F5C\u79CD\u7C7B</strong>\uFF1Aink painting\uFF08\u6C34\u58A8\u753B\uFF09\uFF0Coil painting\uFF08\u6CB9\u753B\uFF09\uFF0Ccomic\uFF08\u6F2B\u753B\uFF09\uFF0Cdigital painting\uFF08\u6570\u5B57\u5370\u5237\u54C1\uFF09\uFF0Cillustration\uFF08\u63D2\u753B\uFF09\uFF0Crealistic painting\uFF08\u5199\u5B9E\u753B\uFF09\uFF0Cportrait photo\uFF08\u8096\u50CF\u7167\uFF09\uFF0Csculpture (\u96D5\u5851) \u7B49\u7B49\uFF0C\u53EF\u53E0\u52A0\u591A\u4E2A\u79CD\u7C7B\u63CF\u8FF0\u3002</li><li><strong>\u53C2\u8003\u5E73\u53F0</strong>\uFF1ATrending on artstation\uFF0C\u4E5F\u53EF\u4EE5\u66FF\u6362\u4E3A\u300CFacebook\u300D\u300CPixiv\u300D\u300CPixbay\u300D\u7B49\u7B49\u3002\u4E0B\u65B9\u63D0\u4F9B\u76F8\u540C\u53C2\u6570\u4E0B\u4E0D\u540C\u53C2\u8003\u5E73\u53F0\u751F\u6210\u7684\u56FE\u7247\u98CE\u683C\u3002 <img src="http://tc.seoipo.com/2022-09-16-22-33-26.png" alt="" title="\u76F8\u540C\u53C2\u6570\u4E0B\u4E0D\u540C\u53C2\u8003\u5E73\u53F0\u751F\u6210\u7684\u56FE\u7247" loading="lazy"></li><li><strong>\u753B\u5BB6/\u753B\u98CE</strong>\uFF1A\u6210\u56FE\u66F4\u63A5\u8FD1\u54EA\u4F4D\u753B\u5BB6\u7684\u98CE\u683C\uFF0C\u6B64\u5904\u53EF\u4EE5\u8F93\u5165\u4E0D\u6B62\u4E00\u4F4D\u753B\u5BB6\uFF0C\u5982\u300CVan Gogh:3\u300Dand\u300CMonet:2\u300D\uFF0C\u5373\u4F5C\u54C1\u4E09\u5206\u50CF\u68B5\u9AD8\uFF0C\u4E24\u5206\u50CF\u83AB\u5948\uFF1B\u6216\u76F4\u63A5\u63CF\u8FF0\u98CE\u683C\u79CD\u7C7B\uFF0C\u5982 <code>very coherent symmetrical artwork</code>\uFF0C\u5C06\u4F5C\u54C1\u7ED3\u6784\u8BBE\u4E3A\u300C\u8FDE\u8D2F\u4E14\u5BF9\u79F0\u300D\u3002</li><li><strong>\u914D\u8272</strong>\uFF1Ayellow color scheme \u6307\u6574\u4E2A\u753B\u9762\u7684\u4E3B\u8272\u8C03\u4E3A\u9EC4\u8272\u3002</li><li><strong>\u753B\u9762\u63CF\u8FF0</strong>\uFF1A\u9664\u4E86\u63CF\u8FF0\u4E3B\u9898\uFF0C\u8FD8\u53EF\u4EE5\u63CF\u8FF0\u6B21\u8981\u5143\u7D20\u548C\u5F62\u5BB9\u8BCD\u63CF\u8FF0\u753B\u9762\u3002\u5982\u679C\u4F60\u60F3\u7279\u522B\u5F3A\u8C03\u67D0\u4E2A\u5143\u7D20\uFF0C\u53EF\u4EE5\u52A0\u5F88\u591A\u62EC\u53F7\u6216\u8005\u60CA\u53F9\u53F7\uFF0C\u6BD4\u5982 <code>desert!!, forest, river, (((sunset)))</code> \u4E2D\u4F1A\u4F18\u5148\u4F53\u73B0\u300Cdesert\u300D\u548C\u300Csunset\u300D\u5143\u7D20\u3002 <ul><li>\u753B\u9762\u5143\u7D20\uFF0C\u5982\uFF1A\u80CC\u666F <code>beautiful background, forest</code>\uFF0C\u5149\u7EBF\u63CF\u8FF0 <code>diffuse natural sun lights, autumn lights, cinematic lighting, god rays</code>\uFF1B</li><li>\u4EBA\u7269\u63CF\u8FF0\uFF0C\u5982\uFF1A\u8096\u50CF\u7167 <code>detailed gorgeous face, delicate features, elegant, slight smile, hard rim lighting</code>\uFF0C\u8D85\u6A21\u63CF\u8FF0 <code>top model, fashion, vogue magazine</code>\uFF0C\u4EBA\u7269\u7EC6\u8282 <code>olive skin, long dark hair, beautiful bone structure, double eyelids, big eyes, high nose bridge, large DD breasts, wavy silver hair, armless, legless</code>\uFF1B</li><li>\u753B\u9762\u8D28\u91CF\u63CF\u8FF0\uFF0C\u5982 <code>award winning, breathtaking, groundbreaking, superb, outstanding</code>\uFF1B</li><li>\u7EC6\u8282\u7279\u70B9\u63CF\u8FF0\uFF0C\u5982 <code>intricate, gorgeous, hyperrealistic, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, octane render, illustration, 8K</code>\uFF0C\u6216 <code>symmetry, depth of field</code>\u3002</li></ul></li><li><strong>\u5426\u5B9A\u63CF\u8FF0</strong>\uFF1Anegative prompt \u4EC5\u88AB auto \u5206\u652F\u652F\u6301\uFF0C\u53EF\u4EE5\u907F\u514D\u753B\u9762\u51FA\u73B0\u6307\u5B9A\u5143\u7D20\uFF0C\u5982 <code>ugly, blurry, out of frame, bad proportions, duplicate, deformed, mutation, morbid, mutilated, bad anatomy, disfigured, extra limbs, cloned face, extra heads, extra legs, extra arms, malformed limbs, amputee, poorly drawn face, poorly drawn hands, poorly drawn feet, fat, long neck, poo art, bad hands, bad art</code>\uFF0C\u907F\u514D\u88F8\u4F53 <code>nudity, bare breasts</code>\u3002</li></ul>',21),U={href:"https://promptomania.com/stable-diffusion-prompt-builder/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://prompthero.com/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://openart.ai/",target:"_blank",rel:"noopener noreferrer"},z=n('<blockquote><p>goddess close-up portrait skull with mohawk, ram skull, skeleton, thorax, x-ray, backbone, jellyfish phoenix head, nautilus, orchid, skull, betta fish, bioluminiscent creatures, intricate artwork by Tooth Wu and wlop and beeple, highly detailed, digital painting, Trending on artstation, very coherent symmetrical artwork, concept art, smooth, sharp focus, illustration, 8k</p></blockquote><h3 id="prompt-matrix" tabindex="-1"><a class="header-anchor" href="#prompt-matrix" aria-hidden="true">#</a> Prompt matrix</h3><p>Prompt matrix \u662F hlky \u5206\u652F\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u6309\u4E0D\u540C\u6761\u4EF6\u7EC4\u5408\u751F\u6210\u591A\u5F20\u76F8\u5173\u4F46\u4E0D\u540C\u7684\u753B\u9762\uFF0C\u9002\u5408\u7528\u4E8E\u5236\u4F5C\u89C6\u9891\u7D20\u6750\u3002<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup> \u6B64\u65F6\uFF0C\u6279\u6B21\u6570\u91CF\u7684\u8BBE\u7F6E\u4F1A\u88AB\u5FFD\u7565\u3002</p>',3),H=n(`<p>\u4E0A\u65B9\u89C6\u9891\u7684\u8C03\u6559\u8BCD\u4E3A <code>A mecha robot in World War II in realistic style|Shoot with another mecha robot|Bombed by planes|Missile drop|broken|Repaired|cinematic lighting</code>\u3002<code>|</code> \u7B26\u53F7\u540E\u7684\u573A\u666F\u6761\u4EF6\u5C06\u8FDB\u884C\u6392\u5217\u7EC4\u5408\uFF0C\u89C6\u9891\u6837\u4F8B\u6709 6 \u4E2A\u573A\u666F\u6761\u4EF6\u751F\u6210 64 \u5F20\u56FE\u3002</p><p>\u53E6\u5916\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6307\u5B9A\u573A\u666F\u6761\u4EF6\u4F4D\u7F6E\uFF0C\u6BD4\u5982 <code>@(moba|rpg|rts) character (2d|3d) model</code> \u8868\u793A <code>(moba|rpg|rts \u4E09\u9009\u4E00) character (2d|3d \u4E8C\u9009\u4E00) model</code>\uFF0C\u4E5F\u5C31\u662F\u4F1A\u751F\u6210 3*2 \u5F20\u56FE\u7247\u3002\u5F00\u5934\u7684 <code>@</code> \u662F\u89E6\u53D1\u6307\u5B9A\u573A\u666F\u6761\u4EF6\u4F4D\u7F6E\u7684\u7B26\u53F7\uFF0C\u4E0D\u80FD\u7701\u7565\u3002</p><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><h3 id="docker-desktop-failed" tabindex="-1"><a class="header-anchor" href="#docker-desktop-failed" aria-hidden="true">#</a> Docker Desktop failed</h3><p>\u672A\u6B63\u5E38\u5B89\u88C5/\u5173\u95ED Docker \u5BB9\u5668\u65F6\uFF0C\u53EF\u80FD\u4F1A\u62A5\u9519 <code>Docker Desktop failed to start/stop</code> \u3002</p><p>\u5148\u5220\u9664 <code>%AppData%</code> \u8DEF\u5F84\u4E0B\u7684 Docker \u6587\u4EF6\u5939\uFF0C\u7136\u540E\u5728 PowerShell \u4E2D\u8F93\u5165\u4E0B\u65B9\u547D\u4EE4\uFF0C\u5173\u95ED WSL \u548C docker-desktop\u3002\u6700\u540E\uFF0C\u624B\u52A8\u91CD\u542F Docker Desktop\u3002</p><div class="language-PowerShell ext-PowerShell line-numbers-mode"><pre class="language-PowerShell"><code>wsl --shutdown
wsl -l -v
wsl --unregister docker-desktop
wsl -l -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-desktop-cannot-start" tabindex="-1"><a class="header-anchor" href="#docker-desktop-cannot-start" aria-hidden="true">#</a> Docker Desktop cannot start</h3><p><code>Hardware assisted virtualization and data execution protection must be enabled in the BIOS</code> \u62A5\u9519\u8BF4\u660E\u7535\u8111\u6CA1\u5F00\u542F\u865A\u62DF\u5316\u3002</p><p>\u5728\u5F00\u673A\u7684\u65F6\u5019\u591A\u6309\u51E0\u6B21 <code>F2</code> \u6216 <code>DEL</code> \u8FDB\u5165 BIOS\uFF0C\u7136\u540E\u8BBE\u7F6E\u4E2D\u5F00\u542F\u300CIntel Virtual Technology\u300D\uFF0CAMD \u5219\u662F\u5C06\u300CSVM Support\u300D\u8BBE\u7F6E\u4E3A\u8BBE\u7F6E\u4E3A\u300CEnable\u300D\u7684\u72B6\u6001\uFF1B\u6700\u540E\u70B9\u51FB\u300CF10\u300D\u4FDD\u5B58\u9000\u51FA\u5373\u53EF\u3002</p><h3 id="docker-\u547D\u4EE4\u5931\u8D25" tabindex="-1"><a class="header-anchor" href="#docker-\u547D\u4EE4\u5931\u8D25" aria-hidden="true">#</a> docker \u547D\u4EE4\u5931\u8D25</h3><p><code>The command &#39;docker&#39; could not be found</code> \u8BF4\u660E\u5F53\u524D\u547D\u4EE4\u884C\u786E\u5B9E Docker \u73AF\u5883\u7F3A\u5931\uFF0C\u68C0\u67E5 Docker Desktop \u662F\u5426\u542F\u52A8\u3002</p><h3 id="\u7AEF\u53E3\u8BBF\u95EE\u88AB\u62D2" tabindex="-1"><a class="header-anchor" href="#\u7AEF\u53E3\u8BBF\u95EE\u88AB\u62D2" aria-hidden="true">#</a> \u7AEF\u53E3\u8BBF\u95EE\u88AB\u62D2</h3><p>Docker \u5BB9\u5668\u539F\u672C\u8FD0\u884C\u6B63\u5E38\uFF0C\u7AEF\u53E3\u8BBF\u95EE\u7A81\u7136\u88AB\u62D2\u7EDD\u4E86\uFF0C\u663E\u793A <code>Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:7860 -&gt; 0.0.0.0:0: listen tcp 0.0.0.0:7860: bind: An attempt was made to access a socket in a way forbidden by its access permissions</code>\u3002</p><p>\u5728 Powershell \u4E2D\u8F93\u5165 <code>netsh int ipv4 show excludedportrange protocol=tcp</code> \u68C0\u67E5\u662F\u5426\u5904\u4E8E\u88AB\u6392\u9664\u7AEF\u53E3\u8303\u56F4\uFF0C\u7136\u540E\u8F93\u5165 <code>reg add HKLM\\SYSTEM\\CurrentControlSet\\Services\\hns\\State /v EnableExcludedPortRange /d 0 /f</code> \u5F00\u542F\u7AEF\u53E3\u3002\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u91CD\u542F\u7535\u8111\u5373\u53EF\u89E3\u5C01\u7AEF\u53E3\u3002<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup></p><h3 id="filenotfounderror" tabindex="-1"><a class="header-anchor" href="#filenotfounderror" aria-hidden="true">#</a> FileNotFoundError</h3><p>\u518D\u6B21\u67B6\u6784\u5BB9\u5668\u65F6\u62A5\u9519 <code>FileNotFoundError: [Errno 2] No such file or directory: &#39;/models/model.ckpt&#39;</code>\uFF0C\u8FD9\u662F\u67B6\u6784\u4F4D\u7F6E\u9519\u8BEF\u5BFC\u81F4\u7684\u3002\u6B64\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u68C0\u67E5\u662F\u5426\u901A\u8FC7 WSL \u8F93\u5165\u7684\u67B6\u6784\u547D\u4EE4\uFF0C\u5E76\u4E14 Stable Diffusion WebUI Docker \u89E3\u538B\u8DEF\u5F84\u662F\u5426\u914D\u7F6E\u6B63\u786E\u3002</p><h3 id="\u91C7\u6837\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u91C7\u6837\u6A21\u578B" aria-hidden="true">#</a> \u91C7\u6837\u6A21\u578B</h3><p>\u91C7\u6837\u6A21\u578B\u662F AI \u7ED8\u753B\u7684\u6838\u5FC3\u30022022.09.10 \u652F\u6301\u81EA\u52A8\u4E0B\u8F7D\u91C7\u6837\u6A21\u578B\uFF0C\u4E0B\u65B9\u5217\u8868\u4EC5\u505A\u53C2\u8003\u3002</p>`,19),C={href:"https://www.googleapis.com/storage/v1/b/aai-blog-files/o/sd-v1-4.ckpt?alt=media",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"model.ckpt",-1),K={href:"https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth",target:"_blank",rel:"noopener noreferrer"},j={href:"https://heibox.uni-heidelberg.de/f/578df07c8fc04ffbadf3/?dl=1",target:"_blank",rel:"noopener noreferrer"},J={href:"https://heibox.uni-heidelberg.de/f/31a76b13ea27482981b4/?dl=1",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"LDSR.ckpt",-1),X=e("code",null,"LDSR.yaml",-1),Z=e("h2",{id:"\u6700\u540E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6700\u540E","aria-hidden":"true"},"#"),o(" \u6700\u540E")],-1),$=e("p",null,"Stable Diffusion \u8FD8\u4E0D\u80FD\u4F5C\u4E3A\u751F\u4EA7\u529B\u5DE5\u5177\uFF0C\u4F46\u5B83\u8BA9\u8BBE\u8BA1\u53D8\u5F97\u7B80\u5355\uFF0C\u4E5F\u8BA9\u66F4\u591A\u666E\u901A\u4EBA\u6253\u5F00\u4E86 AI \u7ED8\u753B\u7684\u53EF\u80FD\u6027\u3002\u63A8\u8350\u5927\u5BB6\u5B9E\u9645\u90E8\u7F72\u73A9\u4E0B\uFF0C\u8BA9\u81EA\u5DF1\u62E5\u6709\u66F4\u591A\u7684\u53EF\u80FD\u3002",-1),ee={href:"https://sspai.com/post/75544",target:"_blank",rel:"noopener noreferrer"},oe=e("hr",{class:"footnotes-sep"},null,-1),te={class:"footnotes"},ae={class:"footnotes-list"},ne={id:"footnote1",class:"footnote-item"},re={href:"https://www.runoob.com/docker/windows-docker-install.html",target:"_blank",rel:"noopener noreferrer"},ie=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),se={id:"footnote2",class:"footnote-item"},le={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command",target:"_blank",rel:"noopener noreferrer"},de=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),ce={id:"footnote3",class:"footnote-item"},he={href:"https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#enable-hyper-v-using-powershell",target:"_blank",rel:"noopener noreferrer"},pe=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"\u21A9\uFE0E",-1),fe={id:"footnote4",class:"footnote-item"},ue={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker/wiki/Setup",target:"_blank",rel:"noopener noreferrer"},be=e("a",{href:"#footnote-ref4",class:"footnote-backref"},"\u21A9\uFE0E",-1),ge={id:"footnote5",class:"footnote-item"},me={href:"https://www.ifanr.com/app/1484403",target:"_blank",rel:"noopener noreferrer"},_e=e("a",{href:"#footnote-ref5",class:"footnote-backref"},"\u21A9\uFE0E",-1),ke={id:"footnote6",class:"footnote-item"},we={href:"https://github.com/hlky/stable-diffusion#prompt-matrix",target:"_blank",rel:"noopener noreferrer"},xe=e("a",{href:"#footnote-ref6",class:"footnote-backref"},"\u21A9\uFE0E",-1),De={id:"footnote7",class:"footnote-item"},ve={href:"https://github.com/docker/for-win/issues/3171#issuecomment-572571882",target:"_blank",rel:"noopener noreferrer"},Se=e("a",{href:"#footnote-ref7",class:"footnote-backref"},"\u21A9\uFE0E",-1);function ye(Ae,Ie){const a=r("ExternalLinkIcon"),i=r("BiliBili");return l(),d("div",null,[h,p,f,e("p",null,[o("\u4F53\u9A8C AI \u7ED8\u56FE\u53EF\u501F\u52A9\u5728\u7EBF\u5DE5\u5177 "),e("a",u,[o("Hugging Face"),t(a)]),o("\u3001"),e("a",b,[o("DreamStudio"),t(a)]),o(" \u6216 "),e("a",g,[o("\u767E\u5EA6\u6587\u5FC3"),t(a)]),o("\u3002\u4E0E\u672C\u5730\u90E8\u7F72\u76F8\u6BD4\uFF0CHugging Face \u9700\u6392\u961F\uFF0C\u751F\u6210\u4E00\u5F20\u56FE\u7EA6 5 \u5206\u949F\uFF1BDreamStudio \u53EF\u514D\u8D39\u751F\u6210 200 \u5F20\u56FE\u7247\uFF0C\u4E4B\u540E\u9700\u8981\u7F34\u8D39\uFF1B\u767E\u5EA6\u6587\u5FC3\u80FD\u7528\u4E2D\u6587\u751F\u6210\u56FE\u7247\uFF0C\u4F46\u4ECD\u5904\u4E8E beta \u9636\u6BB5\uFF0C\u672A\u6B63\u5F0F\u5546\u7528\u3002\u66F4\u91CD\u8981\u7684\u662F\uFF0C\u8FD9\u7C7B\u5728\u7EBF\u5DE5\u5177\u5BF9\u56FE\u7247\u7684\u8C03\u6559\u529F\u80FD\u504F\u5F31\uFF0C\u65E0\u6CD5\u6279\u91CF\u751F\u6210\u56FE\u7247\uFF0C\u53EA\u80FD\u6D4B\u8BD5\u4F53\u9A8C\u3002")]),e("p",null,[o("\u5982\u679C\u60F3\u751F\u6210\u5927\u91CF AI \u56FE\u7247\uFF0C\u53EF\u4EE5\u901A\u8FC7 Docker Desktop \u5C06 "),e("a",m,[o("Stable Diffusion WebUI Docker"),t(a)]),o(" \u90E8\u7F72\u5230\u5BB6\u7528\u7535\u8111\uFF0C\u4ECE\u800C\u514D\u8D39\u5B9E\u73B0 AI \u6587\u5B57\u7ED8\u753B\uFF0C\u4E0D\u518D\u88AB\u5728\u7EBF\u5DE5\u5177\u6240\u9650\u5236\u3002Mac \u7528\u6237\u5EFA\u8BAE\u9009\u62E9 Stable Diffusion \u7684 lstein \u5206\u652F\uFF0C\u90E8\u7F72\u62A5\u9519\u53C2\u8003 "),e("a",_,[o("InvokeAI \u6587\u6863"),t(a)]),o("\uFF0C"),k,o(" \u63A8\u8350\u4F7F\u7528\u66F4\u7B80\u4FBF\u7684 "),e("a",w,[o("CHARL-E"),t(a)]),o(" \u6216 "),e("a",x,[o("DiffusionBee"),t(a)]),o("\u3002")]),D,e("p",null,[o("\u6309\u5E73\u53F0\u9009 "),e("a",v,[o("Docker Desktop"),t(a)]),o(" \u7248\u672C\uFF0C\u5B89\u88C5\u540E\u70B9\u51FB\u5DE6\u4FA7\u7684 Add Extensions\uFF0C\u63A8\u8350 Disk usage \u6269\u5C55\uFF0C\u4FBF\u4E8E\u7BA1\u7406 Docker \u5B58\u50A8\u7A7A\u95F4\u3002")]),S,e("p",null,[o("\u7136\u540E\uFF0C\u5C06 "),e("a",y,[o("Stable Diffusion WebUI Docker"),t(a)]),o(" \u4E0B\u8F7D\u5E76\u89E3\u538B\u5230\u672C\u5730\u786C\u76D8\u3002\u6216\u8005\uFF0C\u4F7F\u7528\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D "),e("a",A,[o("\u805A\u5408\u7248"),t(a)]),o("\uFF0C2022.10.01 \u66F4\u65B0\u3002")]),I,L,e("ul",null,[B,G,e("li",null,[R,o("\uFF1A\u552F\u4E00\u4E0D\u4F9D\u8D56\u663E\u5361\u7684\u5206\u652F\u3002\u5982\u679C\u6CA1\u6709\u7B26\u5408\u8981\u6C42\u7684\u663E\u5361\uFF0C\u53EF\u4EE5\u4F7F\u7528 CPU \u7248\u672C\uFF0C\u7A0D\u540E\u7684\u955C\u50CF\u6784\u5EFA\u547D\u4EE4\u4E3A "),W,o("\u3002A \u5361\u7528\u6237\u6CE8\u610F\u4FEE\u6539 "),e("a",E,[o("\u663E\u5361\u8BBE\u7F6E"),t(a)]),o("\u3002")]),P]),M,e("p",null,[o("\u4E4B\u540E\uFF0C\u6253\u5F00 Docker Desktop \u5C31\u4F1A\u542F\u52A8 Stable Diffusion\u3002\u4E0B\u8F7D\u65B0\u7248 "),e("a",N,[o("\u914D\u7F6E\u6587\u4EF6"),t(a)]),o(" \uFF0C\u6309\u4E0A\u65B9\u6B65\u9AA4\u91CD\u65B0\u6784\u5EFA\u5BB9\u5668\u5373\u53EF\u66F4\u65B0 Stable Diffusion\u3002")]),F,e("p",null,[o("\u9664\u753B\u9762\u63CF\u8FF0\u5916\uFF0C\u5176\u4ED6\u8981\u7D20\u5E76\u975E\u5FC5\u987B\u3002\u5982\u679C\u4F60\u53EA\u662F\u7B80\u5355\u5C1D\u8BD5\uFF0C\u751A\u81F3\u53EF\u4EE5\u53EA\u8F93\u5165\u300Capples\u300D\u3002\u5982\u679C\u4F60\u6CA1\u6709\u601D\u7EEA\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),e("a",U,[o("promptoMANIA"),t(a)]),o(" \u6309\u63D0\u793A\u7EC4\u5408\u63CF\u8FF0\uFF0C\u6216\u53C2\u8003 AI \u56FE\u5E93 "),e("a",T,[o("PromptHero"),t(a)]),o(" \u548C "),e("a",V,[o("OpenArt"),t(a)]),o(" \u4E0A\u5176\u4ED6\u4EBA\u5206\u4EAB\u7684\u6210\u54C1\u56FE\u548C\u63CF\u8FF0\u6587\u6848\uFF0C\u6BD4\u5982")]),z,t(i,{bvid:"BV1YP411V7vV"}),H,e("ul",null,[e("li",null,[e("a",C,[o("Stable Diffusion v1.4 (4GB)"),t(a)]),o(", \u5C06\u538B\u7F29\u5305\u6587\u4EF6\u91CD\u547D\u540D\u4E3A "),O,o("\u3002")]),e("li",null,[o("(\u53EF\u9009) "),e("a",K,[o("GFPGANv1.4.pth (340MB)"),t(a)]),o("\u3002")]),e("li",null,[o("(\u53EF\u9009) "),e("a",q,[o("RealESRGAN_x4plus.pth (64MB)"),t(a)]),o(" \u548C "),e("a",Y,[o("RealESRGAN_x4plus_anime_6B.pth (18MB)"),t(a)]),o("\u3002")]),e("li",null,[o("(\u53EF\u9009) "),e("a",j,[o("LDSR (2GB)"),t(a)]),o(" \u548C "),e("a",J,[o("LDSR \u914D\u7F6E"),t(a)]),o("\uFF0C\u5206\u522B\u91CD\u547D\u540D\u4E3A "),Q,o(" \u548C "),X,o("\u3002")])]),Z,$,e("p",null,[o("\u672C\u6587\u4E8E\u300C"),e("a",ee,[o("\u5C11\u6570\u6D3E\u9996\u53D1"),t(a)]),o("\u300D\u3002")]),oe,e("section",te,[e("ol",ae,[e("li",ne,[e("p",null,[e("a",re,[o("Windows Docker \u5B89\u88C5"),t(a)]),o(),ie])]),e("li",se,[e("p",null,[e("a",le,[o("\u4F7F\u7528 WSL \u5728 Windows \u4E0A\u5B89\u88C5 Linux"),t(a)]),o(),de])]),e("li",ce,[e("p",null,[e("a",he,[o("\u5728 Windows 10 \u4E0A\u5B89\u88C5 Hyper-V"),t(a)]),o(),pe])]),e("li",fe,[e("p",null,[e("a",ue,[o("Setup Stable Diffusion WebUI Docker"),t(a)]),o(),be])]),e("li",ge,[e("p",null,[e("a",me,[o("\u5916\u7F51\u7206\u706B\u7684 4 \u6B3E\u300C\u4F60\u8BF4\u6211\u753B\u300D\u81EA\u52A8\u4F5C\u753B\u5DE5\u5177\uFF0C\u6211\u4EEC\u6D4B\u4E86\u4E0B\uFF0C\u6709 1 \u6B3E\u7684\u786E\u8D85\u5F3A"),t(a)]),o(),_e])]),e("li",ke,[e("p",null,[e("a",we,[o("stable-diffusion Prompt matrix"),t(a)]),o(),xe])]),e("li",De,[e("p",null,[e("a",ve,[o("Windows \u7AEF\u53E3\u8BBF\u95EE\u88AB\u62D2"),t(a)]),o(),Se])])])])])}const Ge=s(c,[["render",ye],["__file","2022-09-05-stable_diffusion_ai_painting.html.vue"]]);export{Ge as default};
