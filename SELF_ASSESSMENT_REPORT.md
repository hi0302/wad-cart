# Self assessment — IA#1

GitHub link: https://github.com/hi0302/wad-cart

| # | Criterion | Max | Claimed | Evidence |
|---|---|---|---|---|
| 1 | cartTotal chạy đúng yêu cầu | 30 | 29 | src/cart.js: Math.round trả về một số; `>=` cho free ship; giỏ rỗng thì trả về 0 trước VAT; Throw RangeError cho trường hợp giá tiền âm và qty không nguyên dương. Test "the example from the slides" trả 467400. |
| 2 | Tests | 20 | 20 | test/cart.test.js, 7 tests: "the example from the slides", "empty cart returns 0", "free shipping when subtotal equals the threshold", "negative price throws RangeError", "non-integer qty throws RangeError", "qty 0 throws RangeError", "shipping is charged just below the threshold". npm test CI xanh (commit 3a952a4 và 5bce619). |
| 3 | The harness | 20 | 19 | .github/copilot-instructions.md (stack, commands, dòng Never); script "lint" (node --check) trong package.json; .github/workflows/ci.yml, CI xanh ở 3a952a4 và 5bce619. Harness được commit trước khi cài đặt (82dff1e). |
| 4 | The brief | 15 | 14 | BRIEF.md: file được sửa, contract, các trường hợp lỗi, không dùng dependencies, điều kiện hoàn thành. |
| 5 | AI-LOG.md | 15 | 13 | AI-LOG.md: tool đã dùng, phần Copilot tạo ra, phần em tự viết, các điểm còn hạn chế. Khớp với git log (56048c0, 82dff1e, 5bce619, 3a952a4). |
| | **Total** | **100** | **95** | |

## Những điều em chưa làm được
- Nếu items không phải mảng thì hàm trả về 0 chứ không throw.
- price là null hoặc "" vẫn qua vì Number() ép về 0.
- Gate lint mới chỉ là `node --check` (kiểm tra cú pháp), chưa phải linter thật, để giữ đúng yêu cầu không dùng dependencies.
- Em chưa test subtotal rất lớn hay trường hợp làm tròn đúng .5.