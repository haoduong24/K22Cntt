USE [dvhK22CNT1Lesson07Db]
GO
/****** Object:  Table [dbo].[dvhKhoa]    Script Date: 17/06/2024 8:41:44 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dvhKhoa](
	[dvhMaKhoa] [nchar](10) NOT NULL,
	[dvhTenKH] [nchar](20) NULL,
	[dvhTrangThai] [bit] NULL,
 CONSTRAINT [PK_dvhKhoa] PRIMARY KEY CLUSTERED 
(
	[dvhMaKhoa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[dvhSinhVien]    Script Date: 17/06/2024 8:41:44 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dvhSinhVien](
	[dvhMaSV] [nchar](50) NULL,
	[dvhHoSV] [nchar](50) NULL,
	[dvhTenSV] [nchar](50) NULL,
	[dvhNgaySinh] [date] NULL,
	[dvhPhai] [bit] NULL,
	[dvhPhone] [nchar](10) NULL,
	[dvhEmail] [nchar](50) NULL,
	[dvhMaKH] [nchar](10) NULL
) ON [PRIMARY]

GO
INSERT [dbo].[dvhKhoa] ([dvhMaKhoa], [dvhTenKH], [dvhTrangThai]) VALUES (N'K22CNT1   ', N'K22CNT1             ', 1)
INSERT [dbo].[dvhSinhVien] ([dvhMaSV], [dvhHoSV], [dvhTenSV], [dvhNgaySinh], [dvhPhai], [dvhPhone], [dvhEmail], [dvhMaKH]) VALUES (N'2210900099                                        ', N'Duong Van                                         ', N'Hao                                               ', CAST(N'2004-08-24' AS Date), 1, N'037700482 ', N'haoduong2408@gmail.com                            ', N'K22CNT1   ')
