import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";

import styles from './ImagesGallery.module.css';
import ImagesSearchForm from "../../components/ImagesGallery/ImagesSearchForm";
import ImagesList from "../../components/ImagesGallery/ImagesList";
import { searchImages } from "../../api/imageSearchAPI";
import {
  SEARCH_IMAGES_START,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_ERROR,
  IMAGE_PAGINATION_START,
  IMAGE_PAGINATION_SUCCESS,
  IMAGE_PAGINATION_ERROR 
} from "../../redux/slice/imagesGallerySlice";
import { useDispatch } from "react-redux";
import Pagination from "../../components/common/Pagination/Pagination";

const ImagesGallery = ({
  images,
  totalImages,
  loading,
  page,
  imageName
}) => {

  const maxPages = useMemo(() => {
    const maxPages = Math.ceil(totalImages / 10);
    return maxPages > 50 ? 50 : maxPages
  }, [totalImages]);

  const dispatch = useDispatch();

  const handleSubmitSearch = useCallback(
    async (imageName) => {

      if (loading) return;

      try {
        dispatch(SEARCH_IMAGES_START({ imageName }));
        const imagesData = await searchImages(imageName, page);
        dispatch(SEARCH_IMAGES_SUCCESS({
          images: imagesData.images,
          totalImages: imagesData.total,
        }))
      } catch (error) {
        dispatch(SEARCH_IMAGES_ERROR(error.message))
      }

    }, [loading]
  );

  const handleChangePage = useCallback(
    async (newPage) => {
      if (page === newPage) return;
      try {
        dispatch(IMAGE_PAGINATION_START())
        const imagesData = await searchImages(imageName, newPage);
        dispatch(IMAGE_PAGINATION_SUCCESS({
          images: imagesData.images,
          totalImages: imagesData.total,
          newPage,
        }))
      } catch (error) {
        dispatch(IMAGE_PAGINATION_ERROR(error.message))
      }
    }, [imageName, page],
  )

  return (
    <div className={styles.container}>
      <ImagesSearchForm
        imageName={imageName}
        onSubmit={handleSubmitSearch}
      />
      <ImagesList images={images} loading={loading} />
      <Pagination 
        page={page}
        maxPages={maxPages}
        onChangePage={handleChangePage}
      />

    </div>
  )
}

const mapStateToProps = ({
  imagesGallery: { imageName, images, totalImages, loading, page }
}) => ({ imageName, images, totalImages, loading, page })

export default connect(mapStateToProps)(ImagesGallery);