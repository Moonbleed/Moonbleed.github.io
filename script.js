let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");
let clickCount = 0; // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "你认真的吗…", "要不再想想？", "不许选这个！", "我会很伤心…", "不行T T"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;
    // 让 Yes 变大，每次放大 1.3 倍
    let yesSize = 1 + (clickCount * 0.3);
    yesButton.style.transform = `scale(${yesSize})`;
    // 挤压 No 按钮，每次右移 70px
    let noOffset = clickCount * 70;
    noButton.style.transform = `translateX(${noOffset}px)`;
    // 新增：让图片和文字往上移动
    let moveUp = clickCount * 25; // 每次上移 25px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;
    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }
    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "D:\\xianzai\\2.jpg"; // 震惊
    if (clickCount === 2) mainImage.src = "D:\\xianzai\\3.jpg"; // 思考
    if (clickCount === 3) mainImage.src = "D:\\xianzai\\4.jpg"; // 生气
    if (clickCount === 4) mainImage.src = "D:\\xianzai\\5.jpg"; // 哭
    if (clickCount >= 5) mainImage.src = "D:\\xianzai\\6.jpg"; // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">喜欢你！！（><）</h1>
            <img src="D:\\xianzai\\7.jpg" alt="拥抱" class="yes-image">
        </div>
    `;
    document.body.style.overflow = "hidden";
});
