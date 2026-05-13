import { PageHeading } from "@/components/layout/PageHeading";

export default function About() {
	return (
		<>
			<PageHeading title={`about me`} />
			<div className="section mb-6">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-xl">🌱</span>
					<h2 className="text-lg font-semibold text-sky-700">
						Hành trình & Giá trị cá nhân
					</h2>
				</div>
				<ul className="list-disc list-inside space-y-1 ms-4">
					<li>
						Bắt đầu từ việc tự học, tôi đã từng bước xây dựng nền tảng vững chắc về
						lập trình web.
					</li>
					<li>Luôn đặt trải nghiệm người dùng và hiệu quả sản phẩm lên hàng đầu.</li>
					<li>
						Đề cao tinh thần hợp tác, chia sẻ kiến thức với đồng nghiệp và cộng đồng.
					</li>
					<li>
						Không ngừng học hỏi công nghệ mới, sẵn sàng thích nghi với thay đổi.
					</li>
				</ul>
			</div>

			<div className="section mb-6">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-xl">🎯</span>
					<h2 className="text-lg font-semibold text-sky-700">
						Định hướng phát triển
					</h2>
				</div>
				<p className="	ms-4">
					Tôi hướng tới việc trở thành một lập trình viên toàn diện, có thể đảm nhận
					cả frontend và backend, đồng thời phát triển kỹ năng quản lý dự án và làm
					việc nhóm. Tôi mong muốn được tham gia các dự án có ý nghĩa xã hội và tạo
					ra sản phẩm hữu ích cho cộng đồng.
				</p>
			</div>

			<div className="section mb-6">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-xl">💡</span>
					<h2 className="text-lg font-semibold text-sky-700">
						Diem manh & Diem yeu
					</h2>
				</div>
				<ul className="list-disc list-inside space-y-1 ms-4">
					<li>Ham hoc hoi, cap nhat cac cong nghe moi.</li>
					<li>Co kien thuc ve phan cung va phan mem.</li>
					<li>Hoa dong, kien nhan.</li>
				</ul>
				<ul className="list-disc list-inside space-y-1 ms-4">
					<li>Qua' tap trung vao tieu tiet, nen bi tri hoan.</li>
					<li>Doi khi con` thieu tap trung.</li>
					<li>Thieu tu tin, it giao tiep.</li>
				</ul>
			</div>

			<div className="section mb-6">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-xl">💡</span>
					<h2 className="text-lg font-semibold text-sky-700">
						Sở thích & Cuộc sống
					</h2>
				</div>
				<ul className="list-disc list-inside space-y-1 ms-4">
					<li>Coding, research, learn new technology.</li>
					<li>Chillin at coffee shop.</li>
					<li>Gaming, read newspaper and coffee.</li>
					<li>Playing guitar and learn languages.</li>
				</ul>
			</div>

			<div className="section mb-6">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-xl">✨</span>
					<h2 className="text-lg font-semibold text-sky-700">Triết lý sống</h2>
				</div>
				<blockquote className="italic border-l-4 border-sky-400 ps-4">
					&quot;Không ngừng học hỏi, không ngại thay đổi, luôn hướng tới giá trị thực
					sự cho bản thân và cộng đồng.&quot;
				</blockquote>
			</div>
		</>
	);
}
