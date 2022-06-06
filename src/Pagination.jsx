import { func, number } from 'prop-types';
import React from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
const configuration = {
	activeLinkClass: 'pagination-active',
	getPageUrl: () => null,
	hideDisabled: true,
	hideFirstLastPages: true,
	innerClass: 'pagination',
	itemClass: 'pagination-item',
	itemClassNext: 'pagination-next',
	itemClassPrev: 'pagination-previous',
	itemsCountPerPage: 1,
	linkClass: 'pagination-link',
	nextPageText: 'Keyingi',
	pageRangeDisplayed: 3,
	prevPageText: 'Oldingi',
};
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	width: 100%;
	& .pagination {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		& .pagination-item {
			border-radius: 10px;
			cursor: pointer;
			font-size: 15px;
			font-weight: 600;
			margin: 0 6px;
			user-select: none;
			width: 38px;
			&:first-child {
				margin: 0 6px 0 0;
			}
			&:last-child {
				margin: 0 0 0 6px;
			}
			&:hover {
				& .pagination-link {
					background: blue;
					border: 1px solid blue;
					color: white;
					& svg {
						& path {
							fill: #ffffff;
						}
					}
				}
			}
			& .pagination-link {
				align-items: center;
				border-radius: 10px;
				border: 1px solid rgba(110, 120, 146, 0.5);
				color: #6e7892;
				display: flex;
				height: 36px;
				justify-content: center;
				text-decoration: none;
				transition: 0.5s;
				width: 36px;
				& svg {
					& path {
						fill: #6e7892;
						transition: 0.5s;
					}
				}
			}
			& .pagination-active {
				background: blue;
				border: 1px solid blue;
				color: white;
			}
		}
		& .pagination-next,
		& .pagination-previous {
			width: initial;
			& .pagination-link {
				padding: 0 10px;
				width: initial;
			}
		}
	}
`;
const Component = ({ activePage, setActivePage, totalItemsCount }) => (
	<StyledElement>
		<Pagination
			{...configuration}
			activePage={activePage}
			onChange={setActivePage}
			totalItemsCount={totalItemsCount}
		/>
	</StyledElement>
);
Component.propTypes = {
	activePage: number.isRequired,
	setActivePage: func.isRequired,
	totalItemsCount: number.isRequired,
};
export default Component;
